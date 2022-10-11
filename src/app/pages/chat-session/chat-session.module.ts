import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ChatSessionPageRoutingModule} from './chat-session-routing.module';

import {ChatSessionPage} from './chat-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatSessionPageRoutingModule
  ],
  declarations: [ChatSessionPage]
})
export class ChatSessionPageModule {}
