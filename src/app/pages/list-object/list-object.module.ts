import { ListObjectPage } from './list-object';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ListObjectPageRoutingModule } from './list-object-routing.module';

@NgModule({
    declarations: [ListObjectPage],
    imports: [IonicModule, CommonModule, ListObjectPageRoutingModule],
    exports: [ListObjectPage]
})
export class ListObjectModule {}
