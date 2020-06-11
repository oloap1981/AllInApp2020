import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentaleCardPage } from './documentale-card';

const routes: Routes = [
  {
    path: '',
    component: DocumentaleCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentaleCardPageRoutingModule {}
