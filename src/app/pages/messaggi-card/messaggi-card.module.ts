import { MessaggiCardPage } from './messaggi-card';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MessaggiCardPageRoutingModule } from './messaggi-card-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [MessaggiCardPage],
    imports: [IonicModule, CommonModule, MessaggiCardPageRoutingModule, ComponentsModule],
    exports: [MessaggiCardPage]
})
export class MessaggiCardModule {}
