import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from '../../providers/core/auth/account.service';
import {IOccupationType} from '../../model/occupation-type';
import {INewGroupRequest} from '../../model/new-group-request';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-new-chat-group',
  templateUrl: './new-chat-group.page.html',
  styleUrls: ['./new-chat-group.page.scss'],
})
export class NewChatGroupPage {
  newGroup: INewGroupRequest = { name: '', occupationTypeId: 0, tags: []};
  occupationTypes: IOccupationType[] = [];
  submitted = false;
  tagSuggestions: ['cat', 'dogs'];

  constructor(
    public router: Router,
    public accountService: AccountService,
    public chatService: ChatService
  ) {}

  ionViewDidEnter() {
    this.accountService.getAllOccupationTypes().subscribe({
      next: (resp) => {
        this.occupationTypes = resp.body;
      }
    });

  }

  onCreate() {
    this.chatService.createNewGroup(this.newGroup).subscribe({
      next: (resp) => {
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl(`/chat-session/${resp.body.id}`, {replaceUrl: true});
      }
    });
  }

}
