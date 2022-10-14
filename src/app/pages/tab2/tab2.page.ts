import {Component, Type} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {AddNewTasksPage} from '../add-new-tasks/add-new-tasks.page';
import {PrincipalService} from '../../providers/core/auth/principal.service';
import {WhiteNoiseService} from '../../providers/white-noise.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FlameletService} from '../../providers/flamelet.service';
import {TodoService} from "../../providers/core/todo.service";

@Component({
  selector: 'modal-flamelet',
  template: `
  <div class="modal-header">
    <h4 class="modal-title ion-text-center" id="modal-title">Your companion</h4>
    <button type="button" class="btn-close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body">
   <img alt="Flamelet" [src]="flameletService.getFlameLetImage()" />
  </div>
 <!-- <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>-->
  `
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal, public flameletService: FlameletService) {}
}

const MODALS: {[name: string]: Type<any>} = {
  focusFirst: NgbdModalConfirm,
};

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
              public modal: NgbActiveModal,
              private modalService: NgbModal,
              private flameletService: FlameletService,
              private alertController: AlertController,
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

  async confirmDeleteTask() {
    const alert = await this.alertController.create({
      header: 'Delete Tasks?',
      message: `Are you sure you want to delete all task?`,
      buttons: [
        {
          text: 'Keep them',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Do nothing
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.resetTasks();
          }
        }
      ]
    });

    await alert.present();
  }

  minAndSec(i) {
    const secs = this.whiteNoises[i].length;
    const quotient = Math.floor(secs/60);
    const remainder = secs % 60;

    return '' + quotient + 'm ' + remainder + 's';
  }


  open(name: string) {
    this.flameletService.setFlameLetImage('https://i.giphy.com/media/eHjrC6X9zDIMI0alnP/giphy.webp');
    this.modalService.open(MODALS[name]);
  }
}
