import { DocumentaleCardPage } from './documentale-card';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DocumentaleCardPageRoutingModule } from './documentale-card-routing.module';

@NgModule({
declarations: [DocumentaleCardPage],
    imports: [IonicModule, CommonModule, DocumentaleCardPageRoutingModule],
exports: [DocumentaleCardPage]
})
export class DocumentaleCardModule {}
