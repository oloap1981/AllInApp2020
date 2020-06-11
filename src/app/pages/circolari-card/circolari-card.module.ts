import { HomeMessModule } from '../home-mess/home-mess.module';
import { CircolariCardPage } from './circolari-card';
import { HomeComModule } from '../home-com/home-com.module';



import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [CircolariCardPage],
imports: [IonicModule, HomeComModule, HomeMessModule, CommonModule],
exports: [CircolariCardPage]
})
export class CircolariCardModule {}
