import { ComunicazioniCardPage } from './comunicazioni-card';


import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ComunicazioniCardPageRoutingModule } from './comunicazioni-card-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
declarations: [ComunicazioniCardPage],
    imports: [IonicModule, CommonModule, ComunicazioniCardPageRoutingModule, ComponentsModule],
exports: [ComunicazioniCardPage]
})
export class ComunicazioniCardModule {}
