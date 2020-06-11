import { HomeComModule } from '../home-com/home-com.module';
import { HomeMessModule } from '../home-mess/home-mess.module';
import { MessaggiCardPage } from './messaggi-card';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MessaggiCardPageRoutingModule } from './messaggi-card-routing.module';

@NgModule({
declarations: [MessaggiCardPage],
    imports: [IonicModule, HomeMessModule, HomeComModule, CommonModule, MessaggiCardPageRoutingModule],
exports: [MessaggiCardPage]
})
export class MessaggiCardModule {}
