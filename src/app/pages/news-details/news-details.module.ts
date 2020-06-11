import { NewsDetailsPage } from './news-details';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NewsDetailsPageRoutingModule } from './news-details-routing.module';

@NgModule({
declarations: [NewsDetailsPage],
    imports: [IonicModule, CommonModule, NewsDetailsPageRoutingModule],
exports: [NewsDetailsPage]
})
export class NewsDetailsModule {}
