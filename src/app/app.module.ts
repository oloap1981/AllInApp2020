import { BachecaDetailsModule } from './pages/bacheca-details/bacheca-details.module';
import { BachecaDetailsPage } from './pages/bacheca-details/bacheca-details';
import { BachecaMieiPage } from './pages/bacheca-miei/bacheca-miei';
import { BachecaPreferitiModule } from './pages/bacheca-preferiti/bacheca-preferiti.module';
import { BachecaPreferitiPage } from './pages/bacheca-preferiti/bacheca-preferiti';
import { BachecaNuovoModule } from './pages/bacheca-nuovo/bacheca-nuovo.module';
import { BachecaNuovoPage } from './pages/bacheca-nuovo/bacheca-nuovo';
import { BachecaPage } from './pages/bacheca/bacheca';
import { BachecaCardPage } from './pages/bacheca-card/bacheca-card';
import { BachecaModule } from './pages/bacheca/bacheca.module';
import { BachecaCardModule } from './pages/bacheca-card/bacheca-card.module';
import { ListObjectModule } from './pages/list-object/list-object.module';
import { ListObjectPage } from './pages/list-object/list-object';
import { DocumentaleListaPage } from './pages/documentale-lista/documentale-lista';
import { DocumentaleListaModule } from './pages/documentale-lista/documentale-lista.module';
import { DocumentaleDetailsPage } from './pages/documentale-details/documentale-details';
import { DocumentaleDetailsModule } from './pages/documentale-details/documentale-details.module';
import { DocumentaleCategoriePage } from './pages/documentale-categorie/documentale-categorie';
import { DocumentalePage } from './pages/documentale/documentale';
import { DocumentaleModule } from './pages/documentale/documentale.module';
import { ComunicazioniDetailsPage } from './pages/comunicazioni-details/comunicazioni-details';
import { CircolariDetailsModule } from './pages/circolari-details/circolari-details.module';
import { CircolariDetailsPage } from './pages/circolari-details/circolari-details';
import { CircolariCardPage } from './pages/circolari-card/circolari-card';
import { CircolariPage } from './pages/circolari/circolari';
import { CircolariCardModule } from './pages/circolari-card/circolari-card.module';
import { CircolariPageModule } from './pages/circolari/circolari.module';
import { ComunicazioniDetailsModule } from './pages/comunicazioni-details/comunicazioni-details.module';
import { ComunicazioniPageModule } from './pages/comunicazioni/comunicazioni.module';
import { MessaggiUscitaPage } from './pages/messaggi-uscita/messaggi-uscita';
import { MessaggiCestinoPage } from './pages/messaggi-cestino/messaggi-cestino';
import { MessaggiImportantiPage } from './pages/messaggi-importanti/messaggi-importanti';
import { MessaggiUscitaModule } from './pages/messaggi-uscita/messaggi-uscita.module';
import { MessaggiCestinoModule } from './pages/messaggi-cestino/messaggi-cestino.module';
import { MessaggiImportantiModule } from './pages/messaggi-importanti/messaggi-importanti.module';
import { MessaggiNuovoPage } from './pages/messaggi-nuovo/messaggi-nuovo';
import { MessaggiNuovoModule } from './pages/messaggi-nuovo/messaggi-nuovo.module';
import { HomeMessPage } from './pages/home-mess/home-mess';

import { MessaggiCardPage } from './pages/messaggi-card/messaggi-card';
import { MessaggiDetailsPage } from './pages/messaggi-details/messaggi-details';
import { MessaggiPage } from './pages/messaggi/messaggi';
import { HomeMessModule } from './pages/home-mess/home-mess.module';
import { MessaggiCardModule } from './pages/messaggi-card/messaggi-card.module';

import { ComunicazioniCardPage } from './pages/comunicazioni-card/comunicazioni-card';
import { NewsDetailsPage } from './pages/news-details/news-details';
import { NewsDetailsModule } from './pages/news-details/news-details.module';
import { NewsCardPage } from './pages/news-card/news-card';
import { NewsModule } from './pages/news/news.module';
import { NewsCardModule } from './pages/news-card/news-card.module';
import { ContactCardModule } from './pages/contact-card/contact-card.module';
import { ContactCardPage } from './pages/contact-card/contact-card';
import { HomeComPage } from './pages/home-com/home-com';
import { HomeComModule } from './pages/home-com/home-com.module';
import { RouterModule } from '@angular/router';

import { ErrorService } from './services/shared/error.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { MyApp } from './app.component';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Location } from '@angular/common';

// #REGION - Modules
import {LoginModule} from './pages/login/login.module';
import {HomeModule} from './pages/home/home.module';
import { LoadingModule } from './pages/loading/loading.module';
import { ChatModule } from './pages/chat/chat.module';
import { MyChatModule } from './pages/mychat/mychat.module';
import { ProfiloModule } from './pages/profilo/profilo.module';
// #REGION - Components/pages
import { HomePage } from './pages/home/home';
// import { TabsPage } from './pages/tabs/tabs';
// import { ComunicazioniPage } from './pages/comunicazioni/comunicazioni';
import { LoginPage } from './pages/login/login';
import { LoadingPage } from './pages/loading/loading';
import { ChatPage } from './pages/chat/chat';
import { MyChatPage } from './pages/mychat/mychat';
import { ContactsPage } from './pages/contacts/contacts';
import { ContactDetailsPage } from './pages/contact-details/contact-details';
import { ProfiloPage } from './pages/profilo/profilo';
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
import { NewsPage } from './pages/news/news';
import { ComunicazioniCardModule } from './pages/comunicazioni-card/comunicazioni-card.module';
import { MessaggiModule } from './pages/messaggi/messaggi.module';
import { MessaggiDetailsModule } from './pages/messaggi-details/messaggi-details.module';
import { ComunicazioniPage } from './pages/comunicazioni/comunicazioni';
import { DocumentaleCategorieModule } from './pages/documentale-categorie/documentale-categorie.module';
import { BachecaMieiModule } from './pages/bacheca-miei/bacheca-miei.module';
import { AlertService } from './services/shared/alert.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    AppRoutingModule,
    IonicModule,
    BrowserModule,
    LoginModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    ComunicazioniCardModule,
    ComunicazioniPageModule,
    ComunicazioniDetailsModule,
    HomeComModule,
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
    HomeMessModule,
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
  bootstrap: [MyApp],
  entryComponents: [
    HomePage
  ],
  providers: [
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
