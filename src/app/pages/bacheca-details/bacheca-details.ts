// import { BachecaNuovoPage } from './../bacheca-nuovo/bacheca-nuovo';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { StoreService } from './../../services/store/store.service';
import { HttpService } from './../../services/shared/http.service';
import { NavController, NavParams, AlertController, ActionSheetController } from '@ionic/angular';

import { OnInit, Component, NgZone } from '@angular/core';

import { Module } from '../../models/modules/modules.namespace';
import { Login } from '../../models/login/login.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';
import { BachecaElem } from 'src/app/models/bacheca/bacheca-elem';


@Component({
  selector: 'bacheca-details',
  templateUrl: 'bacheca-details.html'
})

export class BachecaDetailsPage extends BaseComponent implements OnInit {

  public bacheca: BachecaElem;
  color: string;
  icon: string;
  mio: boolean;
  stato: string;

  imageURI: any;
  imageURL: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private http: HttpService,
    private alertCtrl: AlertController,
    private store: StoreService,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public router: Router,
    public ngZone: NgZone) {

    super(router, ngZone);
  }

  ngOnInit() {
    this.mio = false;
    this.stato = "N";
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

    this.bacheca = this.navParams.get('bacheca');

    this.store.getUserDataPromise().then((val: Login.Token) => {
      if (this.bacheca.dipendenti_key === val.token_dipendente_key) {
        this.mio = true;
      }
    });
  }

  back() {
    this.navCtrl.pop();
  }

  public async presentConfirmEmail() {
    const alert = await this.alertCtrl.create({
      header: 'Conferma invio e-mail',
      message: 'Vuoi inviare un\'e-mail a ' + this.bacheca.dp_nome
        + " " + this.bacheca.dp_cognome + '?',
      buttons: [
        {
          text: 'Indietro',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Conferma',
          handler: () => {
            this.email();
          }
        }
      ]
    });
    await alert.present();
  }

  public async presentConfirmCall() {
    const alert = await this.alertCtrl.create({
      header: 'Conferma chiamata',
      message: 'Vuoi chiamare ' + this.bacheca.dp_nome
      + " " + this.bacheca.dp_cognome + '?',
      buttons: [
        {
          text: 'Indietro',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Conferma',
          handler: () => {
            this.call();
          }
        }
      ]
    });
    await alert.present();
  }

  public call() {
    this.callNumber.callNumber(this.bacheca.an_telefono, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  public email() {
    const email = {
      to: this.bacheca.an_email,
    };
    this.emailComposer.open(email);
  }

  public setStato(s) {
    this.http.setStatoAnnuncio(this.bacheca.da_dipendenti_key, s).then(
      (r) => {
        this.stato = s;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Modifica immagine',
      buttons: [
        {
          text: 'galleria',
          handler: () => {
            this.getPicture("gallery");
          }
        },
        {
          text: 'fotocamera',
          handler: () => {
            this.getPicture("camera");
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  getPicture(mode) {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    if (mode === "camera") {
      options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.CAMERA
      };
    }

    this.camera.getPicture(options).then((imageData) => {

        this.imageURI = imageData;
        this.http.imgAnnuncio(this.bacheca.annuncio_key, "JPEG", this.imageURI ).then(
          (val) => {
            console.log(val);
            this.load(this.bacheca.annuncio_key);
            alert ("immagine inserita correttamente");
          },
          (err) => {
            alert("errore inserimento immagine");
            console.log(err);
          }
        );
      }, (err) => {
        console.log(err);
      });
  }

  public goToNuovoAnnuncio() {
    this.goToPageParams('bacheca-nuovo', {queryParams: {val: this.bacheca}});
    // this.navCtrl.push(BachecaNuovoPage, {val: this.bacheca});
  }

  public load(key) {
    this.http.getSchedaAnnuncio(key).then(
      (val: BachecaElem) => {
        this.bacheca = val;
      }
    );
  }
}
