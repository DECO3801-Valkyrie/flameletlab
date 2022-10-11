import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChatSessionPage} from './chat-session.page';

const routes: Routes = [
  {
    path: '',
    component: ChatSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatSessionPageRoutingModule {}
