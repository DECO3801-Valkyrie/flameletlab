import {Component} from '@angular/core';
import {Config, ModalController, NavParams} from '@ionic/angular';
import {AccountService} from '../../providers/core/auth/account.service';
import {IOccupationType} from '../../model/occupation-type';

@Component({
  selector: 'app-chats-filter',
  templateUrl: './chats-filter.html',
  styleUrls: ['./chats-filter.scss'],
})
export class ChatsFilterPage {
  ios: boolean;
  occupationTypes: IOccupationType[];
  selectedOccupation = -1;

  tracks: {name: string; icon: string; isChecked: boolean}[] = [];

  constructor(
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public accountService: AccountService
  ) { }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;

    this.accountService.getAllOccupationTypes().subscribe({
      next: (resp) => {
        this.occupationTypes = [{name: 'All', id: -1}, ...resp.body];
      }
    });

  }

  reset() {
    this.selectedOccupation = -1;
  }

  applyFilters() {
    this.dismiss(this.selectedOccupation);
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
