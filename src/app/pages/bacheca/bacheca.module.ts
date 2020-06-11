import { BachecaPage } from './bacheca';

import { NgModule } from '@angular/core';
import { ListObjectModule } from '../list-object/list-object.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BachecaPageRoutingModule } from './bacheca-routing.module';

@NgModule({
declarations: [BachecaPage],
imports: [
    IonicModule,
    ListObjectModule,
    CommonModule,
    BachecaPageRoutingModule],
exports: [BachecaPage]
})
export class BachecaModule {}
