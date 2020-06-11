import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessaggiCardPage } from './messaggi-card';

const routes: Routes = [
  {
    path: '',
    component: MessaggiCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessaggiCardPageRoutingModule {}
