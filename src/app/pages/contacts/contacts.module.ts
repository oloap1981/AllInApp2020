import { NgModule } from '@angular/core';
import { ContactsPage } from './contacts';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ContactsPageRoutingModule } from './contacts-routing.module';

@NgModule({
declarations: [ContactsPage],
    imports: [IonicModule, CommonModule, ContactsPageRoutingModule],
exports: [ContactsPage]
})
export class ContactsModule {}
