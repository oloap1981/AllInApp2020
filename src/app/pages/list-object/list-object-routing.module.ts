import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListObjectPage } from './list-object';

const routes: Routes = [
  {
    path: '',
    component: ListObjectPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListObjectPageRoutingModule {}
