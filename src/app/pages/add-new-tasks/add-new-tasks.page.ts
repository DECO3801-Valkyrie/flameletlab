import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TodoService} from "../../providers/core/todo.service";
import {ITodoRequest} from "../../model/todo-request";

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
}
