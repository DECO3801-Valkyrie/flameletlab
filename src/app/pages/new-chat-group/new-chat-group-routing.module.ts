import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewChatGroupPage} from './new-chat-group.page';

const routes: Routes = [
  {
    path: '',
    component: NewChatGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewChatGroupPageRoutingModule {}
