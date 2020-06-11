import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircolariCardPage } from './circolari-card';

const routes: Routes = [
  {
    path: '',
    component: CircolariCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircolariCardageRoutingModule {}
