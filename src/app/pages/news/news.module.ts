import { ListObjectModule } from '../list-object/list-object.module';
import { NewsPage } from './news';
// import { NewsCardPage } from './../../pages/news-card/news-card';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NewsPageRoutingModule } from './news-routing.module';
// import { MyChatPage } from '../../pages/mychat/mychat';

@NgModule({
declarations: [NewsPage],
    imports: [IonicModule, ListObjectModule, CommonModule, NewsPageRoutingModule],
exports: [NewsPage]
})
export class NewsModule {}
