import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessaggiUscitaPage } from './messaggi-uscita';

const routes: Routes = [
  {
    path: '',
    component: MessaggiUscitaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessaggiUscitaPageRoutingModule {}
