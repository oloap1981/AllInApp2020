import { DocumentaleListaPage } from './documentale-lista';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DocumentaleListaPageRoutingModule } from './documentale-lista-routing.module';

@NgModule({
declarations: [DocumentaleListaPage],
    imports: [IonicModule, CommonModule, DocumentaleListaPageRoutingModule],
exports: [DocumentaleListaPage]
})
export class DocumentaleListaModule {}
