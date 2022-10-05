import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-add-new-tasks',
  templateUrl: './add-new-tasks.page.html',
  styleUrls: ['./add-new-tasks.page.scss']
})
export class AddNewTasksPage implements OnInit {
  taskName;
  taskDueDate;
  taskStartTime;
  taskDurationHours;
  taskDurationMinutes;

  addTaskObject;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss(this.addTaskObject);
  }

  getStartTime() {
    this.taskStartTime = this.taskDueDate.slice(-14,-9);
    return this.taskStartTime;
  }

  getDuration() {
    if (this.taskDurationHours[0] == '0') {
      this.taskDurationHours = this.taskDurationHours[1];
    }
    return '' + this.taskDurationHours + 'hr : ' + this.taskDurationMinutes + ' min';
  }

  addTask() {
    this.addTaskObject = ({
      itemName:this.taskName,itemDueDate:this.taskDueDate,itemStartTime:this.getStartTime(),itemDuration:this.getDuration()
    });
    this.dismiss();
  }
}
