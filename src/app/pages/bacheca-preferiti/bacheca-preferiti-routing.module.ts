import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BachecaPreferitiPage } from './bacheca-preferiti';

const routes: Routes = [
  {
    path: '',
    component: BachecaPreferitiPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BachecaPreferitiPageRoutingModule {}
