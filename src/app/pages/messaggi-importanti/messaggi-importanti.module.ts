import { MessaggiImportantiPage } from './messaggi-importanti';


import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MessaggiImportantiPageRoutingModule } from './messaggi-importanti-routing.module';

@NgModule({
declarations: [MessaggiImportantiPage],
    imports: [IonicModule, CommonModule, MessaggiImportantiPageRoutingModule],
exports: [MessaggiImportantiPage]
})
export class MessaggiImportantiModule {}
