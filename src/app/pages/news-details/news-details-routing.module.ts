import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsPage } from './news-details';

const routes: Routes = [
  {
    path: '',
    component: NewsDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDetailsPageRoutingModule {}
