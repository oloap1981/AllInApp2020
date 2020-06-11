import { MessaggiCestinoPage } from './messaggi-cestino';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MessaggiCestinoPageRoutingModule } from './messaggi-cestino-routing.module';

@NgModule({
declarations: [MessaggiCestinoPage],
    imports: [IonicModule, CommonModule, MessaggiCestinoPageRoutingModule],
exports: [MessaggiCestinoPage]
})
export class MessaggiCestinoModule {}
