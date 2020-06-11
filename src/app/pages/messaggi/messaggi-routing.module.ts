import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessaggiPage } from './messaggi';

const routes: Routes = [
  {
    path: '',
    component: MessaggiPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessaggiPageRoutingModule {}
