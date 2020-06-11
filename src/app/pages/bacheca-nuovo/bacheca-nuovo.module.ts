import { BachecaNuovoPage } from './bacheca-nuovo';


import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
import { BachecaNuovoPageRoutingModule } from './bacheca-nuovo-routing.module';

@NgModule({
declarations: [BachecaNuovoPage],
    imports: [IonicModule, CommonModule, FormsModule, IonicSelectableModule, BachecaNuovoPageRoutingModule],
exports: [BachecaNuovoPage]
})
export class BachecaNuovoModule {}
