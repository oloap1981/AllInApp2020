import { ContactCardPage } from './contact-card';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ContactCardPageRoutingModule } from './contact-card-routing.module';

@NgModule({
declarations: [ContactCardPage],
    imports: [IonicModule, CommonModule, ContactCardPageRoutingModule],
exports: [ContactCardPage]
})
export class ContactCardModule {}
