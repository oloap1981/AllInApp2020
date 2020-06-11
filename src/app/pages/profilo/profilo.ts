// import { FileTransfer } from '@ionic-native/file-transfer';
import { LoginService } from './../../services/login/login.service';
// import { CheckService } from './../../services/shared/check.service';
import { StoreService } from './../../services/store/store.service';
import { OnInit, NgZone } from '@angular/core';
import { ContactService } from './../../services/contact/contact.service';
import { Contact } from './../../models/contact/contact.namespace';
import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from '@ionic/angular';
// import { CallNumber } from '@ionic-native/call-number';
// import { EmailComposer } from '@ionic-native/email-composer';
// import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';
// import { Base64 } from '@ionic-native/base64';


@Component({
  selector: 'page-profilo',
  templateUrl: 'profilo.html'
})
export class ProfiloPage extends BaseComponent implements OnInit {

  user: Contact.ContactDataFull;
  // user = {
  //   nome: "Ugo",
  //   cognome: "Capeto",
  //   ruolo : "Re",
  //   ufficio : "Sala del trono",
  //   responsabile: "popolo francese",
  //   sedeAssunzione: "Francia",
  //   sedeOperativa: "Parigi",
  //   urlAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/King_Hugh_Capet.jpg/120px-King_Hugh_Capet.jpg"
  // }

  imageURI: any;
  imageFileName: any;

  constructor(
    private navCtrl: NavController,
    private login: LoginService,
    private conService: ContactService,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    private  store: StoreService,
    public actionSheetCtrl: ActionSheetController,
    private navController: NavController,
    public router: Router,
    public ngZone: NgZone) {

    super(router, ngZone);

  }

  ngOnInit() {
    this.user = new Contact.ContactDataFull();
    this.user.dipendente = new Contact.Dipendente();
    this.conService.GetContactDetails(-1).then((val: Contact.Dipendente) => {
        if (val != null) {
          this.user.dipendente = val;
        } else {
          alert("errore recupero risorsa");
        }
      });
    }

  back() {
    this.navCtrl.pop();
  }


 public async presentActionSheet() {
  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Modifica avatar',
    buttons: [
      {
        text: 'galleria',
        handler: () => {
          this.changeAvatar("gallery");
        }
      },
      {
        text: 'fotocamera',
        handler: () => {
          this.changeAvatar("camera");
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

changeAvatar(mode) {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    if (mode === "camera") {
      options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA
      };
    }

    this.camera.getPicture(options).then((imageData) => {

      this.imageURI = imageData;

      const s = this.store.userData$.subscribe((val) => {
          s.unsubscribe();
          const s1 = this.login.changeAvatar(this.imageURI, val).subscribe((r) => {
            s1.unsubscribe();
            console.log(r);
            if (r.ErrorMessage.msg_code === 0) {
              alert("avatar modificato correttamente");
              this.navController.pop();
              this.goToPage('profilo');
              // this.navController.push(ProfiloPage);
            } else {
              alert ("errore modifica avatar");
            }
          });
        });
      this.store.getUserData();
    }, (err) => {
      console.log(err);
    });

  }


}
