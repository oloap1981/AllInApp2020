import { NgModule } from '@angular/core';
import { ContactDetailsPage } from './contact-details';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ConotactDetailsPageRoutingModule } from './contact-details-routing.module';

@NgModule({
declarations: [ContactDetailsPage],
    imports: [IonicModule, CommonModule, ConotactDetailsPageRoutingModule],
exports: [ContactDetailsPage]
})
export class ContactDetailsModule {}
