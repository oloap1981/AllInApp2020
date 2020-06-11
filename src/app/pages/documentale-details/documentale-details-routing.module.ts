import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentaleDetailsPage } from './documentale-details';

const routes: Routes = [
  {
    path: '',
    component: DocumentaleDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentaleDetailsPageRoutingModule {}
