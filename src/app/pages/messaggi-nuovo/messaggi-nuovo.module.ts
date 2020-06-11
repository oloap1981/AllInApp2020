
import { MessaggiNuovoPage } from './messaggi-nuovo';


import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicSelectableModule } from 'ionic-selectable';
import { FormsModule } from '@angular/forms';
import { MessaggiNuovoPageRoutingModule } from './messaggi-nuovo-routing.module';

@NgModule({
declarations: [MessaggiNuovoPage],
    imports: [IonicModule, CommonModule, IonicSelectableModule, FormsModule, MessaggiNuovoPageRoutingModule],
exports: [MessaggiNuovoPage]
})
export class MessaggiNuovoModule {}
