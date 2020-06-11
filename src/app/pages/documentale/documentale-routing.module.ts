import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentalePage } from './documentale';

const routes: Routes = [
  {
    path: '',
    component: DocumentalePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentalePageRoutingModule {}
