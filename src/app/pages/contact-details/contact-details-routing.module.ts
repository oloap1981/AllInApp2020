import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPage } from './contact-details';

const routes: Routes = [
  {
    path: '',
    component: ContactDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConotactDetailsPageRoutingModule {}
