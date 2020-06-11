import { BachecaCardPage } from './bacheca-card';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BachecaCardPageRoutingModule } from './bacheca-card-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [BachecaCardPage],
    imports: [IonicModule, CommonModule, BachecaCardPageRoutingModule, ComponentsModule],
    exports: [BachecaCardPage]
})
export class BachecaCardModule {}
