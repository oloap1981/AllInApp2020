import { NgModule } from '@angular/core';
import { ChatPage } from './chat';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ChatPageRoutingModule } from './chat-routing.module';

@NgModule({
declarations: [ChatPage],
    imports: [IonicModule, CommonModule, ChatPageRoutingModule],
exports: [ChatPage]
})
export class ChatModule {}
