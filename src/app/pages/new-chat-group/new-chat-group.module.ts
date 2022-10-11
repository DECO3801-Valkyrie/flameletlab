import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewChatGroupPageRoutingModule} from './new-chat-group-routing.module';
import {NewChatGroupPage} from './new-chat-group.page';
import {NgxInputTagModule} from '@ngx-lite/input-tag';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewChatGroupPageRoutingModule,
    NgxInputTagModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [NewChatGroupPage]
})
export class NewChatGroupPageModule {}
