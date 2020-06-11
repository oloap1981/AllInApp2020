import { MessaggiPage } from './messaggi';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MessaggiPageRoutingModule } from './messaggi-routing.module';

@NgModule({
declarations: [MessaggiPage],
    imports: [IonicModule, CommonModule, MessaggiPageRoutingModule],
exports: [MessaggiPage]
})
export class MessaggiModule {}
