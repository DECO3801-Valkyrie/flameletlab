import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-add-new-tasks',
  templateUrl: './add-new-tasks.page.html',
  styleUrls: ['./add-new-tasks.page.scss']
})
export class AddNewTasksPage implements OnInit {
  taskName;
  taskCategory;
  taskPriorities;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
