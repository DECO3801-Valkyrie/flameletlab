import {Component, OnInit} from '@angular/core';
import {
  AlertController,
  Config,
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController
} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  chats: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public config: Config
  ) { }

  ngOnInit() {
  }

  async presentFilter() {
  }

  updateChatList() {

  }




}
