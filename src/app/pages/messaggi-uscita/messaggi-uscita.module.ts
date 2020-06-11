import { MessaggiUscitaPage } from './messaggi-uscita';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MessaggiUscitaPageRoutingModule } from './messaggi-uscita-routing.module';

@NgModule({
declarations: [MessaggiUscitaPage],
    imports: [IonicModule, CommonModule, MessaggiUscitaPageRoutingModule],
exports: [MessaggiUscitaPage]
})
export class MessaggiUscitaModule {}
