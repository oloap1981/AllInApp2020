import { MessaggiDetailsPage } from './../messaggi-details/messaggi-details';
import { HttpService } from './../../services/shared/http.service';
import { NavController, AlertController } from '@ionic/angular';


import { OnInit, Component, NgZone } from '@angular/core';
import { Messaggi } from '../../models/messaggi/messaggi.namespace';
// import { StoreService } from '../../services/store/store.service';
// import { Login } from '../../models/login/login.namespace';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';




@Component({
  selector: 'messaggi-uscita',
  templateUrl: 'messaggi-uscita.html'
})

export class MessaggiUscitaPage extends BaseComponent implements OnInit {

  public messFull: Messaggi.MessaggiElem[];
  public clonedMess: Messaggi.MessaggiElem[];
  color: string;
  icon: string;
  constructor(
    public navCtrl: NavController,
    private http: HttpService,
    private alertCtrl: AlertController,
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
    // let s= this.store.userData$.subscribe(
    //   (val)=>{
    //     let s1= this.http.getMessaggeList(val.token_value,'0','0','O').subscribe(
    //       (val1)=>{
    //         this.messFull = val1.l_lista_messaggi;
    //         s1.unsubscribe();
    //       }
    //     );
    //     s.unsubscribe();
    //   }
    // )
    // this.store.getUserData();

    this.http.getMessaggeList("0", "0", "O").then(
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
    const alert =  await this.alertCtrl.create({
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
