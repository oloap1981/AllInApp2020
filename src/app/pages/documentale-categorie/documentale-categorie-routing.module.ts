import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentaleCategoriePage } from './documentale-categorie';

const routes: Routes = [
  {
    path: '',
    component: DocumentaleCategoriePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentaleCategoriePageRoutingModule {}
