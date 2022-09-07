import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTasksPageRoutingModule } from './add-new-tasks-routing.module';

import { AddNewTasksPage } from './add-new-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTasksPageRoutingModule
  ],
  declarations: [AddNewTasksPage]
})
export class AddNewTasksPageModule {}
