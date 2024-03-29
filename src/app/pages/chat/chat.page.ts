import {Component, ViewChild} from '@angular/core';
import {
  AlertController,
  Config,
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController
} from '@ionic/angular';
import {Router} from '@angular/router';
import {ChatsFilterPage} from '../chats-filter/chats-filter-page';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage  {

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  options: any;
  segment = 'joined';
  excludeTracks: any = [];
  chats: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  selectedOccupation = -1;
  @ViewChild('content', {static: false}) content: any;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    private alertController: AlertController,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public chatService: ChatService,
    public config: Config
  ) {
  }

  ionViewDidEnter() {
    this.updateChatList();
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: ChatsFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    await modal.present();

    const {data} = await modal.onWillDismiss();
    if (data) {
      this.selectedOccupation = data;
      this.updateChatList();
    }
  }


  updateChatList() {
    this.options = {query: this.queryText};
    if (this.segment === 'joined') {
      this.options = {...this.options, joined: ''};
    }

    if (this.selectedOccupation !== -1) {
      this.options = {...this.options, occupationTypeId: this.selectedOccupation};
    }

    this.chatService.getGroupChats(this.options).subscribe(
      {
        next: (resp) => {
          this.groups = resp.body;
        }
      }
    );
  }

  filterOnSearch() {
    setTimeout(() => {
      this.updateChatList();
    }, 500);
  }

  formatTags(tags) {
    return tags.map(t => `#${t}`).join(' ');
  }

  onJoin(groupId) {
    this.chatService.join(groupId).subscribe({
      next: (resp) => {
        this.router.navigateByUrl(`/chat-session/${groupId}`);
      }
    });
  }

  async onLeave(groupId, groupName) {
    const alert = await this.alertController.create({
      header: 'Leave Group?',
      message: `Are you sure you wish to leave ${groupName}`,
      buttons: [
        {
          text: 'No, Stay',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Do nothing
          }
        }, {
          text: 'Yes, Leave',
          handler: () => {
            this.chatService.leave(groupId).subscribe({
              next: (resp) => {
                this.updateChatList();
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }

  onRefresh() {
    this.updateChatList();
    this.content.scrollToBottom(300);
  }

}
