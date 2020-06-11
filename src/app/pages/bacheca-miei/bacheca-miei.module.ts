import { BachecaMieiPage } from './bacheca-miei';


import { NgModule } from '@angular/core';
import { ListObjectModule } from '../list-object/list-object.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BachecaìMieiPageRoutingModule } from './bacheca-miei-routing.module';

@NgModule({
declarations: [BachecaMieiPage],
    imports: [IonicModule, ListObjectModule, CommonModule, BachecaìMieiPageRoutingModule],
exports: [BachecaMieiPage]
})
export class BachecaMieiModule {}
