import { HttpService } from './../../services/shared/http.service';
// import { ContactService } from './../../services/contact/contact.service';
// import { Contact } from './../../models/contact/contact.namespace';
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
// import { ContactDetailsPage } from '../contact-details/contact-details';
// import { ErrorService } from '../../services/shared/error.service';
import { Documentale } from '../../models/documentale/documentale.namespace';
import { StoreService } from '../../services/store/store.service';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'documentale-details',
  templateUrl: 'documentale-details.html'
})
export class DocumentaleDetailsPage extends BaseComponent implements OnInit {

  doc: Documentale.Documento;
  color: string;
  icon: string;

  constructor(
    public navCtrl: NavController,
    public http: HttpService,
    public store: StoreService,
    private para: NavParams,
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

    this.doc  = this.para.get('doc');
    this.http.getDocumento(this.doc.documenti_key).then(
      (val1: Documentale.Documento) => {
        this.doc = val1;
      },
    (error) => {
      console.log(error);
    });
  }

  back() {
    this.navCtrl.pop();
  }


}
