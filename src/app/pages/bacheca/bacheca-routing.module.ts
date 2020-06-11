import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BachecaPage } from './bacheca';

const routes: Routes = [
  {
    path: '',
    component: BachecaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BachecaPageRoutingModule {}
