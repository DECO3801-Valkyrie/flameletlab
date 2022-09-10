import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddNewTasksPage} from '../add-new-tasks/add-new-tasks.page';
import {PrincipalService} from "../../providers/core/auth/principal.service";
import {WhiteNoiseService} from "../../providers/white-noise.service";

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

  fullName = '';
  whiteNoises:Array<any> = [];
  playingWhiteNoiseIndex:number = -1;

  constructor(public modalCtrl: ModalController,
              public principal: PrincipalService,
              public whiteNoiseService: WhiteNoiseService) {
    principal.identity(true).then(account => {
      this.fullName = account.fullName.split(" ")[0];
    })
  }

  ionViewDidEnter() {
    this.whiteNoiseService.getAll().subscribe(resp => {
      this.whiteNoises = resp.body.map(w => {
        return {...w, isPlaying: false}
      });
      console.log(resp);
    }, error => {
      console.log(error);
    })
    }

    onWhiteNoiseRecommendationClicked(audioPath, index) {
    if (this.playingWhiteNoiseIndex >= 0) {
      this.whiteNoises[this.playingWhiteNoiseIndex].isPlaying = false;
      if (this.playingWhiteNoiseIndex == index) {
        //stop
        this.whiteNoiseService.stop();
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
      console.log(newTaskObject.data);
      this.todoList.push(newTaskObject.data);
    })
    return await modal.present();
  }
}
