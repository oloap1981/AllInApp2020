import { ListObjectModule } from '../list-object/list-object.module';
import { ComunicazioniPage } from './comunicazioni';
// import { HomeComModule } from './../home-com/home-com.module';


import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ComunicazioniPageRoutingModule } from './comunicazioni-routing.module';

@NgModule({
declarations: [ComunicazioniPage],
    imports: [IonicModule, ListObjectModule, CommonModule, ComunicazioniPageRoutingModule],
exports: [ComunicazioniPage]
})
export class ComunicazioniPageModule {}
