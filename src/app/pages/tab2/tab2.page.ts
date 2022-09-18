import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddNewTasksPage} from '../add-new-tasks/add-new-tasks.page';
import {PrincipalService} from '../../providers/core/auth/principal.service';
import {WhiteNoiseService} from '../../providers/white-noise.service';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  events1: any[];

  events2: any[];
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
  whiteNoises: Array<any> = [];
  playingWhiteNoiseIndex = -1;

  constructor(public modalCtrl: ModalController,
              public principal: PrincipalService,
              public whiteNoiseService: WhiteNoiseService) {
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

    this.events1 = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg'
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: PrimeIcons.COG,
        color: '#673AB7'
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: PrimeIcons.ENVELOPE,
        color: '#FF9800'
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: PrimeIcons.CHECK,
        color: '#607D8B'
      }
    ];

    this.events2 = ['2020', '2021', '2022', '2023'];
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
      console.log(newTaskObject.data);
      this.todoList.push(newTaskObject.data);
    });
    return await modal.present();
  }
}
