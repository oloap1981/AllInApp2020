import { MessaggiDetailsPage } from './../messaggi-details/messaggi-details';
// import { StoreService } from './../../services/store/store.service';
import { HttpService } from './../../services/shared/http.service';
import { NavController } from '@ionic/angular';

import { OnInit, Component, NgZone } from '@angular/core';
// import { News } from '../../models/news/news.namespace';
import { Messaggi } from '../../models/messaggi/messaggi.namespace';
// import { Login } from '../../models/login/login.namespace';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';



@Component({
  selector: 'messaggi-cestino',
  templateUrl: 'messaggi-cestino.html'
})

export class MessaggiCestinoPage extends BaseComponent implements OnInit {

  public messFull: Messaggi.MessaggiElem[];
  color: string;
  icon: string;
  public clonedMess: Messaggi.MessaggiElem[];
  constructor(
    public navCtrl: NavController,
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
    // let s= this.store.userData$.subscribe(
    //   (val)=>{
    //     let s1 = this.http.getMessaggeList(val.token_value,'0','0','D').subscribe(
    //       (val1)=>{
    //         this.messFull = val1.l_lista_messaggi;
    //         s1.unsubscribe();
    //       }
    //     );
    //     s.unsubscribe();
    //   }
    // )
    // this.store.getUserData();
    this.http.getMessaggeList("0", "0", "D").then(
      (res: Messaggi.MessaggiElem[]) => {
        this.messFull = res;
        this.clonedMess  = Object.assign([], this.messFull);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public goToDetails(mess) {
    this.goToPageParams('messaggi-details', { queryParams: { queryParams: { mess } } });
    // this.navCtrl.push(MessaggiDetailsPage, {mess});
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

  delete(mess) {
    // let s = this.store.userData$.subscribe(
    //   (val)=>{
    //     let busta = new Messaggi.BustaMessaggio();
    //     busta.messaggio = mess;
    //     busta.token = val.token_value;
    //   let s1 = this.http.deleteMessage(busta).subscribe(
    //     (val1)=>{
    //       console.log (busta);
    //       console.log(val1);
    //       let canc = null;
    //       if (val.ErrorMessage.msg_code == 0){
    //         for (let i ; i < this.messFull.length ; i++){
    //           if (this.messFull[i].messaggi_key == mess.messaggi_key){
    //             canc = i;
    //           }
    //         };
    //         if (canc != null)this.messFull.slice(canc,1);
    //         alert ("messaggio eliminato");
    //       }else{
    //         alert ("errore cancellazione");
    //       }
    //       s1.unsubscribe();
    //     })
    //     s.unsubscribe();
    //   }
    // )
    // this.store.getUserData();

    // this.store.getUserDataPromise().then((val) => {
    //   (val) => {
    //     const busta = new Messaggi.BustaMessaggio();
    //     busta.messaggio = mess;
    //     busta.token = val.token_value;
    //     this.http.deleteMessage(busta).then(
    //      (val1) => {
    //         console.log (busta);
    //         console.log(val1);
    //         let canc = null;
    //         for (let i ; i < this.messFull.length ; i++) {
    //           if (this.messFull[i].messaggi_key === mess.messaggi_key) {
    //             canc = i;
    //           }
    //         }
    //         if (canc != null) {this.messFull.slice(canc, 1); }
    //         alert ("messaggio eliminato");
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    //   };
    // });
  }

  ripristina(mess) {

  }
}
