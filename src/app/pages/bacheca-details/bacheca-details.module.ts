import { BachecaDetailsPage } from './bacheca-details';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BachecaDetailsPageRoutingModule } from './bacheca-details-routing.module';

@NgModule({
declarations: [BachecaDetailsPage],
    imports: [IonicModule, CommonModule, BachecaDetailsPageRoutingModule],
exports: [BachecaDetailsPage]
})
export class BachecaDetailsModule {}
