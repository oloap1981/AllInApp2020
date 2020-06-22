import { HttpService } from './../../services/shared/http.service';
import { NavController, AlertController } from '@ionic/angular';
import { OnInit, Component, NgZone } from '@angular/core';
import { BachecaElem } from 'src/app/models/bacheca/bacheca-elem';
import { Module } from '../../models/modules/modules.namespace';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';


@Component({
  selector: 'bacheca-preferiti',
  templateUrl: 'bacheca-preferiti.html'
})
export class BachecaPreferitiPage extends BaseComponent implements OnInit {

  public bachecaFull: Array<BachecaElem>;
  public clonedBacheca: Array<BachecaElem>;
  public borderColor = "border-blue";
  color: string;
  icon: string;

  constructor(
    private navCtrl: NavController,
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
    this.http.getElencoAnnunci("0", "0", "S").then(
      (val1: Array<BachecaElem>) => {
        console.log(val1 );
        this.bachecaFull = val1;
        this.clonedBacheca  = Object.assign([], this.bachecaFull);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  getItems(ev) {
    // Reset items back to all of the items
    this.bachecaFull = [];
    this.bachecaFull  = Object.assign([], this.clonedBacheca );
    // set val to the value of the ev target
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.bachecaFull = this.bachecaFull.filter((item) => {
        return (item.an_titolo.toLowerCase().indexOf(val.toLowerCase()) > -1
                || item.an_data.toLowerCase().indexOf(val.toLowerCase()) > -1
                );
      });
    }
  }

  back() {
    this.navCtrl.pop();
  }

  public goToDetails(bacheca) {
    this.goToPageParams('bacheca-details', { queryParams: { queryParams: { bacheca } } });
    // this.navCtrl.push(BachecaDetailsPage, {bacheca});
  }

  public goToNuovoAnnuncio() {
    this.goToPage('bacheca-nuovo');
    // this.navCtrl.push(BachecaNuovoPage);
  }

  public setStar(mess, stato) {
    this.http.setPreferitoAnnuncio(mess.annuncio_key, stato).then(
      (r) => {
        console.log(r);
        mess.da_preferito = stato;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setDelete(mess: BachecaElem) {
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

    this.http.setDeletedAnnuncio( mess.annuncio_key).then(
      (r) => {
        this.load();
        console.log(r);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public async deleteConfirm(mess: BachecaElem) {
    const alert = await this.alertCtrl.create({
      header: 'Conferma',
      message: "eliminare l'Annuncio dalla tua bacheca?",
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

  load() {
    this.http.getElencoAnnunci("0", "0", "S").then(
      (val1: Array<BachecaElem>) => {
        console.log(val1 );
        this.bachecaFull = val1;
        this.clonedBacheca  = Object.assign([], this.bachecaFull);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
