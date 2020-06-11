import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicazioniPage } from './comunicazioni';

const routes: Routes = [
  {
    path: '',
    component: ComunicazioniPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunicazioniPageRoutingModule {}
