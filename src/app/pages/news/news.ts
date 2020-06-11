import { HttpService } from './../../services/shared/http.service';
import { NavController } from '@ionic/angular';
import { OnInit, Component, NgZone } from '@angular/core';
// import { HomeElement } from '../../models/home-element/home-element.namespace';
import { News } from '../../models/news/news.namespace';
import { NewsDetailsPage } from '../news-details/news-details';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';


@Component({
  selector: 'news',
  templateUrl: 'news.html'
})
export class NewsPage extends BaseComponent implements OnInit {

  public newsFull: News.NewsElem[];
  public clonedNews: News.NewsElem[];
  public borderColor = "border-blue";
  public color: string;
  public icon: string;

  constructor(
    private navCtrl: NavController,
    private http: HttpService,
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
    this.http.getNewsList("0", "0", "X").then(
      (val1: News.NewsElem[]) => {
        console.log(val1 );
        this.newsFull = val1;
        this.clonedNews  = Object.assign([], this.newsFull);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  getItems(ev) {
    // Reset items back to all of the items
    this.newsFull = [];
    this.newsFull  = Object.assign([], this.clonedNews );
    // set val to the value of the ev target
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.newsFull = this.newsFull.filter((item) => {
        return (item.nw_titolo.toLowerCase().indexOf(val.toLowerCase()) > -1
                || item.nw_data.toLowerCase().indexOf(val.toLowerCase()) > -1
                );
      });
    }
  }

  back() {
    this.navCtrl.pop();
  }

  public goToDetails(news) {
    this.goToPageParams('news-details', { queryParams: { queryParams: { news } } });
    // this.navCtrl.push(NewsDetailsPage, {news});
  }
}
