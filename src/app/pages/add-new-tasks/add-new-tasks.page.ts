import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ITodoRequest} from "../../model/todo-request";
import {TodoService} from "../../providers/todo.service";

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
  newTodo: ITodoRequest = { name: '', estimatedTime: '', estimatedStart: '' };

  constructor(public modalCtrl: ModalController, public todoService: TodoService) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss(this.addTaskObject);
  }

   addTask() {
    this.newTodo.name = this.taskName;
    this.newTodo.estimatedStart = this.taskDueDate;
    this.newTodo.estimatedTime = 'PT10S';
    this.todoService.createTodo(this.newTodo).subscribe(
      {
        next: (resp) => {
          // to do something with response
        }
      }
    );
    this.dismiss();
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

}
