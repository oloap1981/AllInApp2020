import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BachecaDetailsPage } from './bacheca-details';

const routes: Routes = [
  {
    path: '',
    component: BachecaDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BachecaDetailsPageRoutingModule {}
