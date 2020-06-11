import { HomeComPage } from './home-com';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HomeComPageRoutingModule } from './home-com-routing.module';
// import { HomePage } from '../../pages/home/home';

@NgModule({
declarations: [HomeComPage],
    imports: [IonicModule, CommonModule, HomeComPageRoutingModule],
exports: [HomeComPage]
})
export class HomeComModule {}
