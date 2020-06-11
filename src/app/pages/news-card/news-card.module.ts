import { NewsCardPage } from './news-card';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NewsCardPageRoutingModule } from './news-card-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
declarations: [NewsCardPage],
    imports: [IonicModule, CommonModule, NewsCardPageRoutingModule, ComponentsModule],
exports: [NewsCardPage]
})
export class NewsCardModule {}
