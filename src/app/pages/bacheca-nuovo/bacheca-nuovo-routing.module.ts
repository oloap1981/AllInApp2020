import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BachecaNuovoPage } from './bacheca-nuovo';

const routes: Routes = [
  {
    path: '',
    component: BachecaNuovoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BachecaNuovoPageRoutingModule {}
