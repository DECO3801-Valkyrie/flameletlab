import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddNewTasksPage} from '../add-new-tasks/add-new-tasks.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  todoList = [];
  today: number = Date.now();
  slideOpt = {
    direction: 'horizontal',
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
    }
  };
  slideOptTodo ={
    direction: 'vertical',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    }
  };

  constructor(public modalCtrl: ModalController) {}
  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTasksPage
    });
    modal.onDidDismiss().then(newTaskObject => {
      console.log(newTaskObject.data);
      this.todoList.push(newTaskObject.data);
    })
    return await modal.present();
  }
}
