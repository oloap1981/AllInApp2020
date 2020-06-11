// import { BachecaMieiPage } from './../bacheca-miei/bacheca-miei';
// import { BachecaPreferitiPage } from './../bacheca-preferiti/bacheca-preferiti';
// import { BachecaDetailsPage } from './../bacheca-details/bacheca-details';
// import { BachecaNuovoPage } from './../bacheca-nuovo/bacheca-nuovo';
import { HttpService } from './../../services/shared/http.service';
import { OnInit, Component, NgZone } from '@angular/core';
//  import { HomeElement } from '../../models/home-element/home-element.namespace';
import { Bacheca } from '../../models/bacheca/bacheca.namespace';
import { Module } from '../../models/modules/modules.namespace';
import { NavController, AlertController } from '@ionic/angular';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';


@Component({
  selector: 'bacheca',
  templateUrl: 'bacheca.html'
})
export class BachecaPage extends BaseComponent implements OnInit {

  public bachecaFull: Bacheca.BachecaElem[];
  public clonedBacheca: Bacheca.BachecaElem[];
  public borderColor = 'border-blue';
  color: string;
  icon: string;

  public rootPage = '';

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
    this.http.getElencoAnnunci('0', '0', 'X').then(
      (val1: Bacheca.BachecaElem[]) => {
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
    this.goToPageParams('bacheca-details', { queryParams: { bacheca } });
    // this.navCtrl.push(BachecaDetailsPage, {bacheca : bacheca}});
  }

  public goToMieiAnnunci() {
    this.goToPage('bacheca-miei');
    // this.navCtrl.push(BachecaMieiPage);
  }

  public goToNuovoAnnuncio() {
    this.goToPage('bacheca-nuovo');
    // this.navCtrl.push(BachecaNuovoPage);
  }

  public goToPreferitiAnnuncio() {
    this.goToPage('bacheca-preferiti');
      // this.navCtrl.push(BachecaPreferitiPage);
    }

  public setStar(mess, stato) {
    this.http.setPreferitoAnnuncio(mess.annuncio_key, stato).then(
      (r) => {
        mess.da_preferito = stato;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setDelete(mess: Bacheca.BachecaElem) {
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
        console.log(r);
        this.load();
        alert('annuncio eliminato dalla tua bacheca');
      },
      (error) => {
        alert('errore eliminazione');
        console.log(error);
      }
    );
  }

  public async deleteConfirm(mess: Bacheca.BachecaElem) {
    const alert = await this.alertCtrl.create({
      header: 'Conferma',
      message: 'eliminare l Annuncio dalla tua bacheca?',
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
    this.http.getElencoAnnunci('0', '0', 'X').then(
      (val1: Bacheca.BachecaElem[]) => {
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
