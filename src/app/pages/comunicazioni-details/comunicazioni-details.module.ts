import { ComunicazioniDetailsPage } from './comunicazioni-details';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComunicazioniDetailsPageRoutingModule } from './comunicazioni-details-routing.module';

@NgModule({
declarations: [
ComunicazioniDetailsPage,
],
imports: [
  IonicModule,
  CommonModule,
  ComunicazioniDetailsPageRoutingModule
],
exports: [
  ComunicazioniDetailsPage
]
})
export class ComunicazioniDetailsModule {}
