import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentaleListaPage } from './documentale-lista';

const routes: Routes = [
  {
    path: '',
    component: DocumentaleListaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentaleListaPageRoutingModule {}
