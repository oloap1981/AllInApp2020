import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatCardPage } from './chat-card';

const routes: Routes = [
  {
    path: '',
    component: ChatCardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatCardPageRoutingModule {}
