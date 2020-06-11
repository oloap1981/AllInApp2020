import { HttpService } from './../../services/shared/http.service';
// import { HttpClient } from '@angular/common/http';
import { ContactService } from './../../services/contact/contact.service';

import { StoreService } from './../../services/store/store.service';
// import { MessaggiDetailsPage } from './../messaggi-details/messaggi-details';
import { NavController, NavParams } from '@ionic/angular';


import { OnInit, Component, NgZone } from '@angular/core';
import { Messaggi } from '../../models/messaggi/messaggi.namespace';
import { Contact } from '../../models/contact/contact.namespace';
import { Module } from '../../models/modules/modules.namespace';
import { Login } from '../../models/login/login.namespace';

// import { SelectSearchableComponent } from 'ionic-select-searchable';
import { IonicSelectableComponent } from 'ionic-selectable';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';


@Component({
  selector: 'messaggi-nuovo',
  templateUrl: 'messaggi-nuovo.html'
})

export class MessaggiNuovoPage extends BaseComponent implements OnInit {

  contacts: Contact.ContactDataMin[] = [];
  oggetto = '';
  messaggio = '';
  destinatario: Contact.ContactDataMin;

  conoscenza: Contact.ContactDataMin[];

  private mess: Messaggi.MessaggiElem;
  color: string;
  icon: string;
  constructor(
    public navCtrl: NavController,
    private store: StoreService,
    private conService: ContactService,
    private http: HttpService,
    private navParams: NavParams,
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
    const mess1 = this.navParams.get('reply');
    const mess2 = this.navParams.get('inoltro');

    if (mess1 != null) {
      this.mess = mess1;
      this.oggetto = 'risposta : ' + this.mess.soggetto ;
      this.messaggio = '-----------------\n' + this.mess.messaggio + '\n-------------------\n';
      // ricerca destinatario

    } else if (mess2 != null) {
      this.mess = mess2;
      this.oggetto = this.mess.soggetto;
      this.messaggio = this.mess.messaggio;
    } else { this.mess = new Messaggi.MessaggiElem(); }
    console.log (this.mess);
    // let s  = this.conService.contactsList$.subscribe((val)=>{
    //   if (val != null){
    //     if (val.ErrorMessage.msg_code == 0){
    //       this.contacts = val.l_dipendenti;
    //       console.log(this.contacts);
    //     }else{
    //       alert('errore recupero della risorsa');
    //     }
    //   }else{
    //     console.log('errore in contacts service');
    //   }
    //   s.unsubscribe();
    // });
    // this.conService.GetContacts('X');

    this.conService.GetContacts('X').then((val: Contact.ContactDataMin[]) => {
      this.contacts = val;
      console.log(this.contacts);
      for (const contact of this.contacts) {
        contact.nomeCognome = contact.nome + ' ' + contact.cognome;
      }
    },
      (error) => {
        alert('errore recupero della risorsa');
      });
  }

  filterPorts(ports: Contact.ContactDataMin[], text: string) {
    return ports.filter(port => {
      return port.nome.toLowerCase().indexOf(text) !== -1 ||
        port.cognome.toLowerCase().indexOf(text) !== -1;
    });
  }

  desChange(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    const text = event.text.trim().toLowerCase();
    event.component.startSearch();
    console.log(text);
    if (!text || text === '') {
      event.component.items = this.contacts;
      event.component.endSearch();
      return;
    }
    event.component.items = this.filterPorts(this.contacts, text);
    event.component.endSearch();
   }

  conChange(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    const text = event.text.trim().toLowerCase();
    event.component.startSearch();
    console.log(text);
    if (!text || text === '') {
      event.component.items = this.contacts;
      event.component.endSearch();
      return;
    }
    event.component.items = this.filterPorts(this.contacts, text);
    event.component.endSearch();
   }

  public goToDetails(mess) {
    this.goToPageParams('messaggi-details', { queryParams: { queryParams: { mess } } });
  }

  back() {
    this.navCtrl.pop();
  }

  public inviaMessaggio() {
    console.log (this.destinatario);
    console.log (this.conoscenza);
    // let s = this.store.userData$.subscribe((val)=>{
    //   let mit : Contact.ContactDataMin;
    //   for (let i=0; i< this.contacts.length; i++ ){
    //     if (this.contacts[i].dipendenti_key == val.token_dipendente_key){
    //       mit = this.contacts[i];
    //     }
    //   }
    //   for (let i=0; i< this.contacts.length; i++ ){
    //     let s = this.contacts[i].nome + ' ' + this.contacts[i].cognome;
    //     if (s  == this.nomeDestinatario){
    //       this.destinatario = this.contacts[i];
    //     }
    //   }
    //   for (let i=0; i< this.contacts.length; i++ ){
    //     let s = this.contacts[i].nome + ' ' + this.contacts[i].cognome;
    //     if (s  == this.nomeConoscenza){
    //       this.conoscenza = this.contacts[i];
    //     }
    //   }
    //   if (mit != null){
    //     if (this.destinatario != null){
    //     let busta: Messaggi.BustaMessaggio = new Messaggi.BustaMessaggio();
    //     let mess : Messaggi.Messaggio = new Messaggi.Messaggio();
    //     let con : Messaggi.Conoscenza = new Messaggi.Conoscenza();

    //     mess.mittente_key = val.token_dipendente_key;
    //     mess.destinatario_key = this.destinatario.dipendenti_key;
    //     mess.data = new Date().getTime().toString();
    //     mess.soggetto = this.oggetto;
    //     mess.messaggio = this.messaggio;
    //     mess.preferito = 'N';
    //     mess.stato_lettura =  'N';
    //     //stato_messaggio: string;
    //     mess.cognome_mit = mit.cognome;
    //     mess.nome_mit = mit.nome;
    //     mess.cognome_des = this.destinatario.cognome;
    //     mess.nome_des = this.destinatario.nome;

    //     if (this.conoscenza != null){
    //       con.dipendente_key = this.conoscenza.dipendenti_key;
    //       con.nominativo = this.conoscenza.nome + ' ' + this.conoscenza.cognome;
    //     }

    //     busta.c_conoscenza = [];
    //     busta.c_conoscenza.push(con);
    //     busta.messaggio = mess;
    //     busta.token = val.token_value;

    //     let s1 = this.http.sendMessage(val.token_value, busta).subscribe((r)=>{
    //       console.log (r);
    //       if (r.ErrorMessage.msg_code == 0){
    //         console.log(busta);
    //         alert ('messaggio inviato correttamente');
    //       }else{
    //         alert('errore nell'invio del messaggio');
    //       }
    //       s1.unsubscribe();
    //     });
    //     s.unsubscribe();
    //   }else{
    //     alert('errore recupero mittente');
    //   }
    // }else{
    //   alert('selezionare destinatario');
    // }
    // });
    // this.store.getUserData();

    this.store.getUserDataPromise().then((val: Login.Token) => {
      let mit: Contact.ContactDataMin;
      for (const contact of this.contacts) {
        if (contact.dipendenti_key === val.token_dipendente_key) {
          mit = contact;
        }
      }

      if (mit != null) {
        if (this.destinatario != null) {
        const busta: Messaggi.BustaMessaggio = new Messaggi.BustaMessaggio();
        const mess: Messaggi.Messaggio = new Messaggi.Messaggio();


        mess.mittente_key = val.token_dipendente_key;
        mess.destinatario_key = this.destinatario.dipendenti_key;
        mess.data = new Date().getTime().toString();
        mess.soggetto = this.oggetto;
        mess.messaggio = this.messaggio;
        mess.preferito = 'N';
        mess.stato_lettura =  'N';
        // stato_messaggio: string;
        mess.cognome_mit = mit.cognome;
        mess.nome_mit = mit.nome;
        mess.cognome_des = this.destinatario.cognome;
        mess.nome_des = this.destinatario.nome;

        busta.c_conoscenza = [];
        if (this.conoscenza !== undefined) {
          for (const conosc of this.conoscenza) {
            const con: Messaggi.Conoscenza = new Messaggi.Conoscenza();
            con.dipendente_key = conosc.dipendenti_key;
            con.nominativo = conosc.cognome;
            busta.c_conoscenza.push(con);
          }
        }

        busta.messaggio = mess;
        busta.token = val.token_value;

        this.http.sendMessage( busta).then((r: Messaggi.MessaggioResult ) => {
          console.log (r);
          if (r.ErrorMessage.msg_code === 0) {
            console.log(busta);
            alert ('messaggio inviato correttamente');
          } else {
            alert('errore nell invio del messaggio');
          }
          });
        } else {
          alert('errore recupero mittente');
        }
      } else {
        alert('selezionare destinatario');
      }
    });
    this.back();
  }

}
