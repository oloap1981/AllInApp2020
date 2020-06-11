import { HttpService } from './../../services/shared/http.service';
import { OnInit, OnDestroy, NgZone } from '@angular/core';
import { ContactService } from './../../services/contact/contact.service';
import { Contact } from './../../models/contact/contact.namespace';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html'
})
export class ContactDetailsPage extends BaseComponent implements OnInit, OnDestroy {

  message: string;
  contactMin: Contact.ContactDataMin;
  contact: Contact.Dipendente;
  color: string;
  icon: string;

  constructor(
    private navCtrl: NavController,
    private conService: ContactService,
    private navParams: NavParams,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
    private alertCtrl: AlertController,
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
    this.contact = new Contact.Dipendente();
    this.contactMin = this.navParams.get('contact');
    if (this.contactMin) {
        this.message = 'utente trovato ' + this.contactMin.nome;

        // this.conService.contactsFull$.subscribe((val)=>{
        //   console.log(val);
        //     if (val != null){
        //       this.contact = val;
        //     }else{
        //       alert('errore recupero risorsa');
        //     }
        //   })
        // this.conService.GetContactDetails(this.contactMin.dipendenti_key);

        this.conService.GetContactDetails(this.contactMin.dipendenti_key).then(
          (val: Contact.Dipendente) => {
            this.contact = val;
          }
        );

      } else {
        this.message = 'utente non trovato';
      }
  }

  ngOnDestroy() {

  }

  back() {
    this.navCtrl.pop();
  }

  call() {
    this.callNumber.callNumber(this.contact.telefono, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  email() {
     const email = {
      to: this.contact.email,
    };
     this.emailComposer.open(email);
  }

  public async presentConfirmEmail() {
    const alert = await this.alertCtrl.create({
      header: 'Conferma invio e-mail',
      message: 'Vuoi inviare un\'e-mail a ' + this.contact.nome
        + ' ' + this.contact.cognome + '?',
      buttons: [
        {
          text: 'Indietro',
          role: 'cancel',
          handler: () => {

          }
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
      message: 'Vuoi chiamare ' + this.contact.nome
      + ' ' + this.contact.cognome + '?',
      buttons: [
        {
          text: 'Indietro',
          role: 'cancel',
          handler: () => {

          }
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
}
