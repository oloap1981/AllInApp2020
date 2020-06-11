import { ChatCardPage } from './chat-card';

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ChatCardPageRoutingModule } from './chat-card-preferiti-routing.module';

@NgModule({
declarations: [ChatCardPage],
    imports: [IonicModule, CommonModule, ChatCardPageRoutingModule],
exports: [ChatCardPage]
})
export class ChatCardModule {}
