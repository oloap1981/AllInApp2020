import { DocumentalePage } from './documentale';


import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DocumentalePageRoutingModule } from './documentale-routing.module';

@NgModule({
declarations: [DocumentalePage],
    imports: [IonicModule, CommonModule, DocumentalePageRoutingModule],
exports: [DocumentalePage]
})
export class DocumentaleModule {}
