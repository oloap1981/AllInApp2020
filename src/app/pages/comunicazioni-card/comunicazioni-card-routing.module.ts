import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicazioniCardPage } from './comunicazioni-card';

const routes: Routes = [
  {
    path: '',
    component: ComunicazioniCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunicazioniCardPageRoutingModule {}
