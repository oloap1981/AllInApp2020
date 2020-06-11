// import { ComunicazioniDetailsPage } from './../comunicazioni-details/comunicazioni-details';
import { HttpService } from './../../services/shared/http.service';
// import { StoreService } from './../../services/store/store.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Comunicazione } from '../../models/comunicazione/comunicazione.namespace';
import { Module } from '../../models/modules/modules.namespace';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';

/**
 * Generated class for the ComunicazioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comunicazioni',
  templateUrl: 'comunicazioni.html',
})
export class ComunicazioniPage extends BaseComponent implements OnInit {

  public comFull: Comunicazione.ComunicazioneElencoElem[];
  color: string;
  icon: string;
  public groupedCom = [] ;
  public clonedCom = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpService,
    public router: Router,
    public ngZone: NgZone) {

    super(router, ngZone);

  }

  ngOnInit() {

    this.http.getModules().then(
      (modules: Module.ModuleElem[]) => {
        console.log(modules);
        for (const module of modules) {
          if (module.tab_moduli_cod === 2) {
            this.color = module.tab_moduli_colore;
            this.icon = module.tab_moduli_icona;
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );

    // let s = this.store.userData$.subscribe(
    //   (val)=>{
    //     let s1 = this.http.getComunicazioniElenco(0,0,'X','C').subscribe(
    //       (val1)=>{
    //         this.comFull = val1.l_lista_comunicazione;
    //         s1.unsubscribe();
    //       }
    //     )
    //     s.unsubscribe();
    //   }
    // )
    // this.store.getUserData();

    this.http.getComunicazioniElenco(0, 0, 'X', 'C').then(
    (val1: Comunicazione.ComunicazioneElencoElem[]) => {
      this.comFull = val1;
      this.clonedCom  = Object.assign([], this.comFull);
      this.groupCom(this.comFull);
    },
    (error) => {
      console.log(error);
    });
  }

  groupCom(com: Comunicazione.ComunicazioneElencoElem[]) {
    const sortedCom = com.sort((n1, n2) => {
      if (new Date (n1.cm_data).getTime > new Date (n2.cm_data).getTime) { return 1; }
      if (new Date (n1.cm_data).getTime < new Date (n2.cm_data).getTime) { return -1; }
      return 0;
    });
    let currentLetter = "00";
    let currentCom = [];

    sortedCom.forEach((val, index) => {
        const value = val.cm_data;
        const temp = value.charAt(5) + value.charAt(6);
        if (temp  !== currentLetter) {

            currentLetter = value.charAt(5) + value.charAt(6);

            const newGroup = {
                letter: currentLetter,
                mese: this.getMese(currentLetter),
                anno: value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3),
                com: []
            };

            currentCom = newGroup.com;
            this.groupedCom.push(newGroup);

        }
        currentCom.push(val);
    });
  }

  getMese(date) {
    let mese;
    if (date != null) { mese = date; }
    switch (mese) {
      case '01':
        mese = 'Gennaio';
        break;
      case '02':
        mese = 'Febbraio';
        break;
      case '03':
        mese = 'Marzo';
        break;
      case '04':
        mese = 'Aprile';
        break;
      case '05':
        mese = 'Maggio';
        break;
      case '06':
        mese = 'Giugno';
        break;
      case '07':
        mese = 'Luglio';
        break;
      case '08':
        mese = 'Agosto';
        break;
      case '09':
        mese = 'Settembre';
        break;
      case '10':
        mese = 'Ottobre';
        break;
      case '11':
        mese = 'Novembre';
        break;
      case '12':
        mese = 'Dicembre';
        break;
    }
    return mese;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.comFull = [];
    this.comFull  = Object.assign([], this.clonedCom );
    // set val to the value of the ev target
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.comFull = this.comFull.filter((item) => {
        return (item.cm_titolo.toLowerCase().indexOf(val.toLowerCase()) > -1
                || item.cm_data.toLowerCase().indexOf(val.toLowerCase()) > -1
                );
      });
    }
    this.groupedCom = [];
    this.groupCom(this.comFull);
  }

  goToDetails(com) {
    this.goToPageParams('comunicazioni-details', { queryParams: { queryParams: { com } } });
    // this.navCtrl.push(ComunicazioniDetailsPage, {com});
  }

  back() {
    this.navCtrl.pop();
  }

}
