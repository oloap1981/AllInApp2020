// import { ComunicazioniDetailsModule } from './../../modules/comunicazioni-details/comunicazioni-details.module';
import { HttpService } from './../../services/shared/http.service';
// import { StoreService } from './../../services/store/store.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { Comunicazione } from '../../models/comunicazione/comunicazione.namespace';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';

/**
 * Generated class for the ComunicazioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'comunicazioni-details',
  templateUrl: 'comunicazioni-details.html',
})
export class ComunicazioniDetailsPage extends BaseComponent implements OnInit {

  public com: Comunicazione.Comunicazione;
  color: string;
  icon: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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

    const c = this.navParams.get('com');
    this.com = new Comunicazione.Comunicazione();

    // let s = this.store.userData$.subscribe(
    //   (val)=>{
    //     let s1 = this.http.getComunicazione(val.token_value,c.comunicazione_key).subscribe(
    //       (val1)=>{
    //         this.com = val1.comunicazione;
    //         s1.unsubscribe();
    //       }
    //     )
    //     let s2 = this.http.setReadComunicazione(val.token_value, c.comunicazione_key).subscribe(
    //       (val2)=>{
    //         s2.unsubscribe();
    //       }
    //     );
    //     s.unsubscribe();
    //   }
    // )
    // this.store.getUserData();

    this.http.getComunicazione(c.comunicazione_key).then(
          (val1: Comunicazione.Comunicazione) => {
            this.com = val1;
          },
          (error) => {
            console.log(error);
          }
        );

    this.http.setReadComunicazione( c.comunicazione_key).then(
          (val2) => {
            console.log(val2);
          },
          (error) => {
            console.log(error);
          }
        );
  }

  back() {
    this.navCtrl.pop();
  }

  delete() {
    // let s = this.store.userData$.subscribe(
    //   (val)=>{
    //     let s1 = this.http.setDeletedComunicazione(val.token_value, this.com.comunicazione_key).subscribe(
    //       (val1)=>{
    //         if (val1.ErrorMessage.msg_code == 0){
    //           let alert = this.alertCtrl.create({
    //             title: 'Cancellazione',
    //             subTitle: 'Cancellazzione andata a buon fine',
    //             buttons: ['Dismiss']
    //           });
    //           alert.present();
    //           this.navCtrl.pop();
    //         }else{
    //           let alert = this.alertCtrl.create({
    //             title: 'Cancellazione',
    //             subTitle: 'Cancellazzione fallita',
    //             buttons: ['Dismiss']
    //           });
    //           alert.present();
    //         }
    //         s1.unsubscribe();
    //       }
    //     )
    //     s.unsubscribe();
    //   }
    // )
    // this.store.getUserData();
    this.http.setDeletedComunicazione(this.com.comunicazione_key).then(
      async (val1: Comunicazione.Result) => {
        if (val1.ErrorMessage.msg_code === 0) {
          const alert = await this.alertCtrl.create({
            header: 'Cancellazione',
            message: 'Cancellazzione andata a buon fine',
            buttons: ['Dismiss']
          });
          await alert.present();
          this.navCtrl.pop();
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Cancellazione',
            message: 'Cancellazzione fallita',
            buttons: ['Dismiss']
          });
          await alert.present();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
