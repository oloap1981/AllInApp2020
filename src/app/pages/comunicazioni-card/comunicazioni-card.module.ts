import { HomeMessModule } from '../home-mess/home-mess.module';
import { HomeComModule } from '../home-com/home-com.module';
import { ComunicazioniCardPage } from './comunicazioni-card';


import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ComunicazioniCardPageRoutingModule } from './comunicazioni-card-routing.module';

@NgModule({
declarations: [ComunicazioniCardPage],
    imports: [IonicModule, HomeComModule, HomeMessModule, CommonModule, ComunicazioniCardPageRoutingModule],
exports: [ComunicazioniCardPage]
})
export class ComunicazioniCardModule {}
