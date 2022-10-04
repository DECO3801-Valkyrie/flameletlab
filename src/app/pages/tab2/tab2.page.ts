import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddNewTasksPage} from '../add-new-tasks/add-new-tasks.page';
import {PrincipalService} from '../../providers/core/auth/principal.service';
import {WhiteNoiseService} from '../../providers/white-noise.service';
import {TodoService} from "../../providers/core/todo.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  todoList = [];
  clearFlag = false;
  today: number = Date.now();
  slideOpt = {
    direction: 'horizontal',
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
    }
  };

  fullName = '';
  whiteNoises: Array<any> = [];
  playingWhiteNoiseIndex = -1;

  constructor(public modalCtrl: ModalController,
              public principal: PrincipalService,
              public whiteNoiseService: WhiteNoiseService,
              public todoService: TodoService) {
    principal.identity(true).then(account => {
      this.fullName = account.fullName.split(' ')[0];
    });
  }

  ionViewDidEnter() {
    this.whiteNoiseService.getAll().subscribe(resp => {
      this.whiteNoises = resp.body.map(w => ({...w, isPlaying: false}));
      console.log(resp);
    }, error => {
      console.log(error);
    });
    this.todoService.getAll().subscribe({
      next: (resp) => {
        this.todoList = resp.body.todos;
      }
    });
    }

    onWhiteNoiseRecommendationClicked(audioPath, index) {
    if (this.playingWhiteNoiseIndex >= 0) {
      this.whiteNoises[this.playingWhiteNoiseIndex].isPlaying = false;
      if (this.playingWhiteNoiseIndex === index) {
        //stop
        this.whiteNoiseService.stop();
        this.playingWhiteNoiseIndex = -1;
        return;
      }
    }
      this.whiteNoises[index].isPlaying = true;
      this.playingWhiteNoiseIndex = index;
      this.whiteNoiseService.play(audioPath);
    }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTasksPage
    });
    modal.onDidDismiss().then(newTaskObject => {
      // console.log(newTaskObject.data);
      // this.todoList.push(newTaskObject.data);
      // if (newTaskObject.data == undefined) {
      //   this.todoList.pop();
      // }
      this.todoService.getAll().subscribe({
        next: (resp) => {
          this.todoList = resp.body.todos;
        }
      });
    });
    return await modal.present();
  }

  areNoTasksAdded() {
    this.clearFlag = this.todoList === [];
    return this.clearFlag;
  }

  resetTasks() {
    this.todoList = [];
  }

  minAndSec(i) {
    let secs = this.whiteNoises[i].length;
    let quotient = Math.floor(secs/60);
    let remainder = secs % 60;

    return "" + quotient + "m " + remainder + "s";
  }
}
