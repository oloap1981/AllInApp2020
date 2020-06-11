import { CircolariCardPage } from './circolari-card';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
declarations: [CircolariCardPage],
imports: [IonicModule, CommonModule, ComponentsModule],
exports: [CircolariCardPage]
})
export class CircolariCardModule {}
