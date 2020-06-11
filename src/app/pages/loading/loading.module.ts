import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingPage } from './loading';
import { IonicModule } from '@ionic/angular';
import { LoadingPageRoutingModule } from './loading-routing.module';


@NgModule({
declarations: [LoadingPage],
imports: [IonicModule, CommonModule, LoadingPageRoutingModule],
exports: [ LoadingPage],
providers: []
})
export class LoadingModule {}

