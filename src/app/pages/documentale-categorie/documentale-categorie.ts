// import { DocumentaleListaPage } from './../documentale-lista/documentale-lista';

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
  selector: 'documentale-categorie',
  templateUrl: 'documentale-categorie.html'
})
export class DocumentaleCategoriePage extends BaseComponent implements OnInit {

  categorie: Documentale.Categoria[];
  clonedCat: Documentale.Categoria[];
  categoria: number;
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

    this.categoria = this.para.get('categoria');
    this.http.getCategorieDocumenti(this.categoria).then(
    (val1: Documentale.Categoria[]) => {
      this.categorie = val1;
      this.clonedCat  = Object.assign([], this.categorie);
    },
    (error) => {
      console.log(error);
    });
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.categorie = [];
    this.categorie  = Object.assign([], this.clonedCat );
    // set val to the value of the ev target
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.categorie = this.categorie.filter((item) => {
        return (item.tab_categoria_documento_desc.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  goToLista(cat) {
    this.goToPageParams('documentale-lista', { queryParams: { queryParams: { cat } } });
    // this.navCtrl.push(DocumentaleListaPage, {cat});
  }

  back() {
    this.navCtrl.pop();
  }


}
