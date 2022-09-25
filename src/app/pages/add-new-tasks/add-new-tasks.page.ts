import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-add-new-tasks',
  templateUrl: './add-new-tasks.page.html',
  styleUrls: ['./add-new-tasks.page.scss']
})
export class AddNewTasksPage implements OnInit {
  taskName;
  taskCategory;
  taskDueDate;
  addTaskObject;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss(this.addTaskObject);
  }

  addTask() {
    this.addTaskObject = ({
      itemName:this.taskName,itemCategory:this.taskCategory,itemDueDate:this.taskDueDate
    });
    this.dismiss();
  }
}
