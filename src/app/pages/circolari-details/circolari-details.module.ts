import { CircolariDetailsPage } from './circolari-details';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CircolariDetailsPageRoutingModule } from './circolari-details-routing.module';

@NgModule({
  declarations: [
    CircolariDetailsPage,
  ],
  imports: [
    IonicModule, CommonModule, FormsModule, CircolariDetailsPageRoutingModule
  ],
  exports: [
    CircolariDetailsPage
  ]
})
export class CircolariDetailsModule {}
