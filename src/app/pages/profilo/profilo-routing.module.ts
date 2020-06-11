import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiloPage } from './profilo';

const routes: Routes = [
  {
    path: '',
    component: ProfiloPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfiloPageRoutingModule {}
