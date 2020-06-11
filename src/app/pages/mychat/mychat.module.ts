import { NgModule } from '@angular/core';
import { MyChatPage } from './mychat';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MychatPageRoutingModule } from './mychat-routing.module';

@NgModule({
declarations: [MyChatPage],
    imports: [IonicModule, CommonModule, MychatPageRoutingModule],
exports: [MyChatPage]
})
export class MyChatModule {}
