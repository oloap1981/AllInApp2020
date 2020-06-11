import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComPage } from './home-com';

const routes: Routes = [
  {
    path: '',
    component: HomeComPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeComPageRoutingModule {}
