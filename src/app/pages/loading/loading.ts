import { OnInit, OnDestroy, NgZone } from '@angular/core';
import { Login } from './../../models/login/login.namespace';
import { StoreService } from './../../services/store/store.service';
import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
// import { HomePage } from '../home/home';
// import { LoginPage } from "../login/login";
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage extends BaseComponent implements OnInit, OnDestroy {

  // private subscrition ;

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private store: StoreService,
    public router: Router,
    public ngZone: NgZone) {

    super(router, ngZone);

  }

  ngOnInit() {
    this.presentLoadingDefault();
  }

  ionViewDidEnter() {
    this.store.getUserDataPromise().then(
      (val: Login.Token) => {
        if (val != null) {
          this.goToPage('home');
          // this.navCtrl.setRoot(HomePage);
        } else {
          this.goToPage('/home');
          // this.navCtrl.setRoot(LoginPage);
        }
      }
    );
  }

  ngOnDestroy() {
    // this.subscrition.unsubscribe();
  }

  public async presentLoadingDefault() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }


}
