import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyChatPage } from './mychat';

const routes: Routes = [
  {
    path: '',
    component: MyChatPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MychatPageRoutingModule {}
