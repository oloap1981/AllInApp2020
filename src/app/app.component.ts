import { LoadingPage } from './pages/loading/loading';
//  import { User } from './models/user/user.namespace';

// import { StoreService } from './services/store/store.service';
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AlertService } from './services/shared/alert.service';
import { Platform } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { HomePage } from './pages/home/home';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AppComponent {

  rootPage: any = HomePage;

  constructor(
    // private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private alertService: AlertService,
    private platform: Platform,
    private oneSignal: OneSignal) {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.initializeApp();
      });
  }

  private initializeApp(): void {
    this.setupPush();
    // this.firebaseNative.onNotificationOpen().subscribe(message => {
    //   // let id = 0;
    //   console.log('TIPO NOTIFICA: ' + message.tipo_notifica);
    //   this.alertService.presentAlert(message.text);
    // });
  }

  setupPush() {
    // I recommend to put these into your environment.ts
    // this.oneSignal.startInit('2f804047-0405-4833-b914-33d191097791', '1:519352624671:android:4b5ba3f58a03e38c85972a');

    // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // // Notifcation was received in general
    // this.oneSignal.handleNotificationReceived().subscribe(data => {
    //   const msg = data.payload.body;
    //   const title = data.payload.title;
    //   const additionalData = data.payload.additionalData;
    //   this.alertService.presentAlert(msg);
    //   // this.showAlert(title, msg, additionalData.task);
    // });

    // // Notification was really clicked/opened
    // this.oneSignal.handleNotificationOpened().subscribe(data => {
    //   // Just a note that the data is a different place here!
    //   //  let additionalData = data.notification.payload.additionalData;

    //   this.alertService.presentAlert('Notification opened: ' + JSON.stringify(data));
    // });

    // this.oneSignal.endInit();
  }
}
