import { NgModule } from '@angular/core';
import { ProfiloPage } from './profilo';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProfiloPageRoutingModule } from './profilo-routing.module';

@NgModule({
declarations: [ProfiloPage],
    imports: [IonicModule, CommonModule, ProfiloPageRoutingModule],
exports: [ProfiloPage]
})
export class ProfiloModule {}
