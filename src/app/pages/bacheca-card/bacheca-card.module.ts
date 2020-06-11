import { HomeComModule } from '../home-com/home-com.module';
import { HomeMessModule } from '../home-mess/home-mess.module';
import { BachecaCardPage } from './bacheca-card';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BachecaCardPageRoutingModule } from './bacheca-card-routing.module';

@NgModule({
declarations: [BachecaCardPage],
    imports: [IonicModule, HomeMessModule, HomeComModule, CommonModule, BachecaCardPageRoutingModule],
exports: [BachecaCardPage]
})
export class BachecaCardModule {}
