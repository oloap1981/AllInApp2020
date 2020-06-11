import { BachecaCardModule } from '../bacheca-card/bacheca-card.module';
import { CircolariCardModule } from '../circolari-card/circolari-card.module';
import { MessaggiCardModule } from '../messaggi-card/messaggi-card.module';
import { NewsCardModule } from '../news-card/news-card.module';

import { ChatCardModule } from '../chat-card/contact-card.module';
import { DocumentaleCardModule } from '../documentale-card/documentale-card.module';
import { ContactCardModule } from '../contact-card/contact-card.module';

import { HomeComModule } from '../home-com/home-com.module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { ComunicazioniCardModule } from '../comunicazioni-card/comunicazioni-card.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
declarations: [HomePage],
imports: [
CommonModule,
IonicModule,
HomeComModule,
ContactCardModule,
DocumentaleCardModule,
ChatCardModule,
MessaggiCardModule,
NewsCardModule,
ComunicazioniCardModule,
CircolariCardModule,
BachecaCardModule,
    HomePageRoutingModule
]
})
export class HomeModule {}
