import { BachecaDetailsModule } from './pages/bacheca-details/bacheca-details.module';
import { BachecaPreferitiModule } from './pages/bacheca-preferiti/bacheca-preferiti.module';
import { BachecaNuovoModule } from './pages/bacheca-nuovo/bacheca-nuovo.module';
import { BachecaModule } from './pages/bacheca/bacheca.module';
import { BachecaCardModule } from './pages/bacheca-card/bacheca-card.module';
import { ListObjectModule } from './pages/list-object/list-object.module';
import { DocumentaleListaModule } from './pages/documentale-lista/documentale-lista.module';
import { DocumentaleDetailsModule } from './pages/documentale-details/documentale-details.module';
import { DocumentaleModule } from './pages/documentale/documentale.module';
import { CircolariDetailsModule } from './pages/circolari-details/circolari-details.module';
import { CircolariCardModule } from './pages/circolari-card/circolari-card.module';
import { CircolariPageModule } from './pages/circolari/circolari.module';
import { ComunicazioniDetailsModule } from './pages/comunicazioni-details/comunicazioni-details.module';
import { ComunicazioniPageModule } from './pages/comunicazioni/comunicazioni.module';
import { MessaggiUscitaModule } from './pages/messaggi-uscita/messaggi-uscita.module';
import { MessaggiCestinoModule } from './pages/messaggi-cestino/messaggi-cestino.module';
import { MessaggiImportantiModule } from './pages/messaggi-importanti/messaggi-importanti.module';
import { MessaggiNuovoModule } from './pages/messaggi-nuovo/messaggi-nuovo.module';

import { MessaggiCardModule } from './pages/messaggi-card/messaggi-card.module';

import { NewsDetailsModule } from './pages/news-details/news-details.module';
import { NewsModule } from './pages/news/news.module';
import { NewsCardModule } from './pages/news-card/news-card.module';
import { ContactCardModule } from './pages/contact-card/contact-card.module';

import { ErrorService } from './services/shared/error.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AppComponent } from './app.component';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

// #REGION - Modules
import {LoginModule} from './pages/login/login.module';
import {HomeModule} from './pages/home/home.module';
import { LoadingModule } from './pages/loading/loading.module';
import { ChatModule } from './pages/chat/chat.module';
import { MyChatModule } from './pages/mychat/mychat.module';
import { ProfiloModule } from './pages/profilo/profilo.module';
// #REGION - Services
import { ComunicazioneService } from './services/comunicazione.service';
import { HttpService } from './services/shared/http.service';
import { LoginService} from './services/login/login.service';
import { IonicStorageModule } from '@ionic/storage';
import { StoreService } from './services/store/store.service';
import { ContactService } from './services/contact/contact.service';
import { ContactsModule } from './pages/contacts/contacts.module';
import { ContactDetailsModule } from './pages/contact-details/contact-details.module';
import { CheckService } from './services/shared/check.service';
import { ComunicazioniCardModule } from './pages/comunicazioni-card/comunicazioni-card.module';
import { MessaggiModule } from './pages/messaggi/messaggi.module';
import { MessaggiDetailsModule } from './pages/messaggi-details/messaggi-details.module';
import { DocumentaleCategorieModule } from './pages/documentale-categorie/documentale-categorie.module';
import { BachecaMieiModule } from './pages/bacheca-miei/bacheca-miei.module';
import { AlertService } from './services/shared/alert.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ConstantsService } from './services/shared/constants.service';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot({
      animated: false
    }),
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    ComunicazioniCardModule,
    ComunicazioniPageModule,
    ComunicazioniDetailsModule,
    LoadingModule,
    ChatModule,
    MyChatModule,
    ContactsModule,
    ContactDetailsModule,
    ProfiloModule,
    ContactCardModule,
    NewsCardModule,
    NewsModule,
    NewsDetailsModule,
    MessaggiModule,
    MessaggiDetailsModule,
    MessaggiCardModule,
    MessaggiNuovoModule,
    MessaggiImportantiModule,
    MessaggiUscitaModule,
    MessaggiCestinoModule,
    CircolariPageModule,
    CircolariCardModule,
    CircolariDetailsModule,
    DocumentaleModule,
    DocumentaleCategorieModule,
    DocumentaleDetailsModule,
    DocumentaleListaModule,
    ListObjectModule,
    BachecaCardModule,
    BachecaModule,
    BachecaNuovoModule,
    BachecaPreferitiModule,
    BachecaMieiModule,
    BachecaCardModule,
    BachecaDetailsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [
    ConstantsService,
    StoreService,
    ComunicazioneService,
    HttpService,
    LoginService,
    ErrorService,
    ContactService,
    CheckService,
    AlertService,
    StatusBar,
    SplashScreen,
    OneSignal,
    FileTransfer,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule {}
