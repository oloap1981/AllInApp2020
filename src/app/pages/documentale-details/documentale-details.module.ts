import { DocumentaleDetailsPage } from './documentale-details';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DocumentaleDetailsPageRoutingModule } from './documentale-details-routing.module';
// import { DocumentaleCategoriePage } from '../../pages/documentale-categorie/documentale-categorie';

@NgModule({
declarations: [DocumentaleDetailsPage],
    imports: [IonicModule, CommonModule, DocumentaleDetailsPageRoutingModule],
exports: [DocumentaleDetailsPage]
})
export class DocumentaleDetailsModule {}
