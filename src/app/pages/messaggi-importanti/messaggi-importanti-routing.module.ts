import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessaggiImportantiPage } from './messaggi-importanti';

const routes: Routes = [
  {
    path: '',
    component: MessaggiImportantiPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessaggiImportantiPageRoutingModule {}
