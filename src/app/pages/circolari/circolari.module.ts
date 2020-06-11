import { ListObjectModule } from '../list-object/list-object.module';
import { CircolariPage } from './circolari';
// import { HomeComModule } from './../home-com/home-com.module';


import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CircolariPageRoutingModule } from './circolari-routing.module';

@NgModule({
declarations: [CircolariPage],
    imports: [IonicModule, ListObjectModule, CommonModule, CircolariPageRoutingModule],
exports: [CircolariPage]
})
export class CircolariPageModule {}
