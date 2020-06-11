import { MessaggiUscitaPage } from './../messaggi-uscita/messaggi-uscita';
import { MessaggiCestinoPage } from './../messaggi-cestino/messaggi-cestino';

// import { StoreService } from './../../services/store/store.service';
import { HttpService } from './../../services/shared/http.service';
import { MessaggiNuovoPage } from './../messaggi-nuovo/messaggi-nuovo';
import { MessaggiDetailsPage } from './../messaggi-details/messaggi-details';
import { NavParams, NavController, MenuController, AlertController } from '@ionic/angular';
import { OnInit, Component, NgZone } from '@angular/core';
// import { HomeElement } from '../../models/home-element/home-element.namespace';
// import { News } from '../../models/news/news.namespace';
// import { NewsDetailsPage } from '../news-details/news-details';
import { Messaggi } from '../../models/messaggi/messaggi.namespace';
// import { Login } from '../../models/login/login.namespace';
import { MessaggiImportantiPage } from '../messaggi-importanti/messaggi-importanti';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';


@Component({
  selector: 'messaggi',
  templateUrl: 'messaggi.html'
})
export class MessaggiPage extends BaseComponent implements OnInit {

  public messFull: Messaggi.MessaggiElem[];
  public clonedMess: Messaggi.MessaggiElem[];
  public color: string;
  public icon: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    public menuCtrl: MenuController,
    private http: HttpService,
    private alertCtrl: AlertController,
    public router: Router,
    public ngZone: NgZone) {

    super(router, ngZone);

  }

  public ngOnInit(): void {
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
    this.messFull = this.navParams.get('messFull');
    console.log(this.messFull);
    this.menuCtrl.enable(true, 'messaggi');

    // let s = this.store.userData$.subscribe((val)=>{
    //   let s1 = this.http.getMessaggeList(val.token_value,"0","0","I").subscribe(
    //       (res)=>{
    //         console.log(res);
    //         if (res.ErrorMessage.msg_code == 0){
    //           this.messFull = res.l_lista_messaggi;
    //         }else{
    //           console.log("errore ricezione News");
    //         }
    //         s1.unsubscribe();
    //       }
    //     );
    //     s.unsubscribe();
    //    }
    // );
    // this.store.getUserData();

    this.http.getMessaggeList("0", "0", "I").then(
      (res: Messaggi.MessaggiElem[]) => {
        this.messFull = res;
        this.clonedMess  = Object.assign([], this.messFull);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  back() {
    this.menuCtrl.enable(false, 'messaggi');
    this.menuCtrl.enable(true, 'home');
    this.navCtrl.pop();
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.messFull = [];
    this.messFull  = Object.assign([], this.clonedMess );
    // set val to the value of the ev target
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.messFull = this.messFull.filter((item) => {
        return (item.cognome_mit.toLowerCase().indexOf(val.toLowerCase()) > -1
                || item.nome_mit.toLowerCase().indexOf(val.toLowerCase()) > -1
                || item.messaggio.toLowerCase().indexOf(val.toLowerCase()) > -1
                || item.soggetto.toLowerCase().indexOf(val.toLowerCase()) > -1
                );
      });
    }
  }

  public goToDetails(mess) {
    this.goToPageParams('messaggi-details', { queryParams: { queryParams: { mess } } });
    // this.navCtrl.push(MessaggiDetailsPage, {mess});
  }

  goTonuovoMessaggio() {
    this.goToPage('messaggi-nuovo');
    // this.navCtrl.push(MessaggiNuovoPage);
  }
  goToUscitaMessaggi() {
    this.goToPage('messaggi-uscita');
    // this.navCtrl.push(MessaggiUscitaPage);
  }
  goToImportantiMessaggi() {
    this.goToPage('messaggi-importanti');
    // this.navCtrl.push(MessaggiImportantiPage);
  }
  goToCestinoMessaggio() {
    this.goToPage('messaggi-cestino');
    // this.navCtrl.push(MessaggiCestinoPage);
  }

  setStar(mess: Messaggi.MessaggiElem, stato) {
      // let s = this.store.userData$.subscribe(
      //   (val: Login.Token)=>{
      //     let s1 = this.http.setStarMessage(val.token_value,mess.messaggi_key,stato).subscribe(
      //       (r)=>{
      //         console.log(r);
      //         if (r.ErrorMessage.msg_code == 0){
      //           mess.preferito = stato;
      //         }
      //         s1.unsubscribe();
      //       }
      //     );
      //     s.unsubscribe();
      //   }
      // );
      // this.store.getUserData();

      this.http.setStarMessage(mess.messaggi_key, stato).then(
        (r) => {
          mess.preferito = stato;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  setDelete(mess: Messaggi.MessaggiElem) {
    // let s = this.store.userData$.subscribe(
    //   (val: Login.Token)=>{
    //     let s1 = this.http.setDeleteMessage(val.token_value, mess.messaggi_key).subscribe(
    //       (r)=>{
    //         console.log(r);
    //         s1.unsubscribe();
    //       }
    //     );
    //     s.unsubscribe();
    //   }
    // );
    // this.store.getUserData();

    this.http.setDeleteMessage( mess.messaggi_key).then(
      (r) => {
        console.log(r);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public async deleteConfirm(mess: Messaggi.MessaggiElem) {
    const alert = await this.alertCtrl.create({
      header: 'Conferma',
      message: 'spostare questo messaggio nel cestino?',
      buttons: [
        {
          text: 'indietro',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'ok',
          handler: () => {
            this.setDelete(mess);
          }
        }
      ]
    });
    await alert.present();
  }

}
