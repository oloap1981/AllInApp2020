import { MessaggiDetailsPage } from './messaggi-details';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MessaggiDetailsPageRoutingModule } from './messaggi-details-routing.module';

@NgModule({
declarations: [MessaggiDetailsPage],
    imports: [IonicModule, CommonModule, MessaggiDetailsPageRoutingModule],
exports: [MessaggiDetailsPage]
})
export class MessaggiDetailsModule {}
