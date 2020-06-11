import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardPage } from './news-card';

const routes: Routes = [
  {
    path: '',
    component: NewsCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCardPageRoutingModule {}
