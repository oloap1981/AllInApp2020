import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessaggiDetailsPage } from './messaggi-details';

const routes: Routes = [
  {
    path: '',
    component: MessaggiDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessaggiDetailsPageRoutingModule {}
