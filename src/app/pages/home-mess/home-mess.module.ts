import { HomeMessPage } from './home-mess';
// import { HomeComPage } from './../../pages/home-com/home-com';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HomeMessPageRoutingModule } from './home-mess-routing.module';
// import { HomePage } from '../../pages/home/home';

@NgModule({
declarations: [HomeMessPage],
    imports: [IonicModule, CommonModule, HomeMessPageRoutingModule],
exports: [HomeMessPage]
})
export class HomeMessModule {}
