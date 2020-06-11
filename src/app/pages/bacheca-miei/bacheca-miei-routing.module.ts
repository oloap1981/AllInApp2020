import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BachecaMieiPage } from './bacheca-miei';

const routes: Routes = [
  {
    path: '',
    component: BachecaMieiPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BachecaìMieiPageRoutingModule {}
