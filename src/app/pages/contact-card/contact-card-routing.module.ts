import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCardPage } from './contact-card';

const routes: Routes = [
  {
    path: '',
    component: ContactCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactCardPageRoutingModule {}
