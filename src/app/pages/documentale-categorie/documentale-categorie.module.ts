import { NgModule } from '@angular/core';
import { DocumentaleCategoriePage } from './documentale-categorie';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DocumentaleCategoriePageRoutingModule } from './documentale-categorie-routing.module';

@NgModule({
declarations: [DocumentaleCategoriePage],
    imports: [IonicModule, CommonModule, DocumentaleCategoriePageRoutingModule],
exports: [DocumentaleCategoriePage]
})
export class DocumentaleCategorieModule {}
