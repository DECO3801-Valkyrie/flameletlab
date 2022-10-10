import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from '../../providers/core/auth/account.service';
import {IOccupationType} from '../../model/occupation-type';

@Component({
  selector: 'app-new-chat-group',
  templateUrl: './new-chat-group.page.html',
  styleUrls: ['./new-chat-group.page.scss'],
})
export class NewChatGroupPage implements OnInit {
  occupationTypes: IOccupationType[] = [];
  selectedOccupation;
  groupName: '';
  submitted = false;
  tags: [];
  tagSuggestions: ['cat', 'dogs'];

  constructor(
    public router: Router,
    public accountService: AccountService,
  ) {}

  ionViewDidEnter() {
    this.accountService.getAllOccupationTypes().subscribe({
      next: (resp) => {
        this.occupationTypes = resp.body;
      }
    });

  }

  ngOnInit() {
  }

}
