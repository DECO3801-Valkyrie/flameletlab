import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTasksPage } from './add-new-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTasksPageRoutingModule {}
