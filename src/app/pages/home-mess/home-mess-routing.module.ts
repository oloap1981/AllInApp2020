import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMessPage } from './home-mess';

const routes: Routes = [
  {
    path: '',
    component: HomeMessPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeMessPageRoutingModule {}
