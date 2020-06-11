// import { CircolariDetailsPage } from './../circolari-details/circolari-details';
// import { CircolariPage } from './../circolari/circolari';
// import { ComunicazioniPage } from './../comunicazioni/comunicazioni';
import { Comunicazione } from './../../models/comunicazione/comunicazione.namespace';

import { HttpService } from './../../services/shared/http.service';
// import { NavController } from '@ionic/angular';
import { OnInit, Component, Input, NgZone } from '@angular/core';
// import { HomeElement } from '../../models/home-element/home-element.namespace';
// import { StoreService } from '../../services/store/store.service';
// import { News } from '../../models/news/news.namespace';
// import { HomeComPage } from './../home-com/home-com';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';


@Component({
  selector: 'circolari-card',
  templateUrl: 'circolari-card.html'
})

export class CircolariCardPage extends BaseComponent implements OnInit {

  public comunicazioniFull: Comunicazione.ComunicazioneElencoElem[] = [];
  public comunicazioniMin: Comunicazione.ComunicazioneElencoElem[] = [];
  public color: string;
  public icon: string;
  public colonne: number;
  @Input() modules: Module.ModuleElem[];

  constructor(
    private http: HttpService,
    public router: Router,
    public ngZone: NgZone) {

    super(router, ngZone);

  }

  ngOnInit() {

    if (this.modules !== undefined) {
      for (const module of this.modules) {
        if (module.tab_moduli_cod === 3) {
          this.color = module.tab_moduli_colore;
          this.icon = module.tab_moduli_icona;
          this.colonne = module.tab_moduli_colonne ;
        }
      }
    }

    // let s = this.store.userData$.subscribe(
    //   (val)=>{
    //     let s1 = this.http.getComunicazioniElenco(val.token_value,0,0,'X','R').subscribe(
    //       (val1)=>{
    //         this.comunicazioniFull = val1.l_lista_comunicazione;
    //         s1.unsubscribe();
    //         if (this.colonne == 2){
    //           for (let i = 0; i < 3 ; i++){
    //             this.comunicazioniMin[i]= new Comunicazione.ComunicazioneElencoElem();
    //             if (this.comunicazioniFull[i] != null)this.comunicazioniMin[i] = this.comunicazioniFull[i];
    //           }
    //         }else{
    //           for (let i = 0; i < 4 ; i++){
    //             this.comunicazioniMin[i]= new Comunicazione.ComunicazioneElencoElem();
    //             if (this.comunicazioniFull[i] != null)this.comunicazioniMin[i] = this.comunicazioniFull[i];
    //           }
    //         }
    //       }
    //     )
    //     s.unsubscribe();
    //   }
    // )
    // this.store.getUserData();

    this.http.getComunicazioniElenco(0, 0, 'X', 'R').then(
      (val1: Comunicazione.ComunicazioneElencoElem[]) => {
        this.comunicazioniFull = val1;
        if (this.colonne === 2) {
          for (let i = 0; i < 3 ; i++) {
            this.comunicazioniMin[i] = new Comunicazione.ComunicazioneElencoElem();
            if (this.comunicazioniFull[i] != null) {this.comunicazioniMin[i] = this.comunicazioniFull[i]; }
          }
        } else {
          for (let i = 0; i < 4 ; i++) {
            this.comunicazioniMin[i] = new Comunicazione.ComunicazioneElencoElem();
            if (this.comunicazioniFull[i] != null) {this.comunicazioniMin[i] = this.comunicazioniFull[i]; }
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToCircolari() {
    this.goToPage('circolari');
    // this.navCtrl.push(CircolariPage);
  }

  goToDetails(com) {
    this.goToPageParams('circolari-details', { queryParams: { queryParams: { com } } });
    // this.navCtrl.push(CircolariDetailsPage, {com});
  }


}
