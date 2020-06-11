import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessaggiCestinoPage } from './messaggi-cestino';

const routes: Routes = [
  {
    path: '',
    component: MessaggiCestinoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessaggiCestinoPageRoutingModule {}
