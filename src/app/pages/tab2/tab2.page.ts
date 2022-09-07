import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddNewTasksPage} from '../add-new-tasks/add-new-tasks.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  todoList = [
    {
      itemName: 'Example',
      itemDueDate: '03-09-22',
      itemPriority: 'high',
      itemCategory: 'Work'
    },
    {
      itemName: 'Example2',
      itemDueDate: '04-09-22',
      itemPriority: 'low',
      itemCategory: 'Work'
    },
    {
      itemName: 'Example3',
      itemDueDate: '05-09-22',
      itemPriority: 'medium',
      itemCategory: 'Personal'
    }];
  today: number = Date.now();
  slideOpt ={
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
    return await modal.present();
  }
}
