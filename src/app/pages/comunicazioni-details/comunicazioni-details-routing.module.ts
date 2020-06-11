import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicazioniDetailsPage } from './comunicazioni-details';

const routes: Routes = [
  {
    path: '',
    component: ComunicazioniDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunicazioniDetailsPageRoutingModule {}
