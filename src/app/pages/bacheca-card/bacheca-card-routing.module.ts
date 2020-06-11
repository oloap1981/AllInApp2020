import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BachecaCardPage } from './bacheca-card';

const routes: Routes = [
  {
    path: '',
    component: BachecaCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BachecaCardPageRoutingModule {}
