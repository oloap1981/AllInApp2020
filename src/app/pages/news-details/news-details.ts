// import { StoreService } from './../../services/store/store.service';
import { HttpService } from './../../services/shared/http.service';
import { NavController, NavParams } from '@ionic/angular';

import { OnInit, Component, NgZone } from '@angular/core';
import { News } from '../../models/news/news.namespace';
import { Module } from '../../models/modules/modules.namespace';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';



@Component({
  selector: 'news-details',
  templateUrl: 'news-details.html'
})

export class NewsDetailsPage extends BaseComponent implements OnInit {

  public news: News.NewsElem;
  color: string;
  icon: string;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
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

      this.news = this.navParams.get('news');
    // let s = this.store.userData$.subscribe((val)=>{
    //   let s1 = this.http.setReadNews(val.token_value, this.news.news_key).subscribe(
    //     (r)=>{
    //       console.log(r);
    //     }
    //   );
    //   s.unsubscribe();
    //   }
    // );
    // this.store.getUserData();

      this.http.setReadNews(this.news.news_key).then(
      (val) => {
        console.log("news letta");
      },
      (error) => {
        console.log(error);
      }
    );

  }

  back() {
    this.navCtrl.pop();
  }

}
