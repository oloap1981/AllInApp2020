import { HomeComModule } from '../home-com/home-com.module';
import { NewsCardPage } from './news-card';
import { HomeMessModule } from '../home-mess/home-mess.module';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NewsCardPageRoutingModule } from './news-card-routing.module';

@NgModule({
declarations: [NewsCardPage],
    imports: [IonicModule, HomeMessModule, HomeComModule, CommonModule, NewsCardPageRoutingModule],
exports: [NewsCardPage]
})
export class NewsCardModule {}
