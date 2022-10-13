import {Component, ViewChild} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {SERVER_API_URL} from '../../app.constants';
import {IChatMessages} from '../../model/group-chat-messages';
import {IMessage} from '../../model/message';
import {ChatService} from '../../providers/chat.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../providers/core/auth/account.service';
import {IAccount} from '../../model/account';


@Component({
  selector: 'app-chat-session',
  templateUrl: './chat-session.page.html',
  styleUrls: ['./chat-session.page.scss'],
})
export class ChatSessionPage {
  stompClient = null;
  socket = null;
  account: IAccount;
  userMessage = '';
  serverBaseUrl = SERVER_API_URL;
  groupChatMessages: IChatMessages;
  oldStompSubscription = null;
  @ViewChild('content', {static: false}) content: any;

  constructor(public chatService: ChatService,
              public router: Router,
              public accountService: AccountService,
              public route: ActivatedRoute) { }

  ionViewDidEnter() {
    this.load();
    this.accountService.get().subscribe({
      next: (resp) => this.account = resp.body
    });
  }


  load(): void {
    this.route.params.subscribe(params => {
      this.chatService.getGroupChatMessages(params.groupId).subscribe({
        next: (resp) => {
          this.groupChatMessages = resp.body;
          if (this.oldStompSubscription) {
            this.oldStompSubscription.unsubscribe();
          }
          this.connect(this.groupChatMessages.groupChat.id);
        }
      });
    });
  }

   connect(groupId) {
     this.socket = new SockJS(`${SERVER_API_URL}flameletlab-websocket`);
     this.stompClient = Stomp.over(this.socket);
     this.stompClient.connect({}, (frame) => {
       // on receiving a message
      this.oldStompSubscription = this.stompClient.subscribe(`/group/${groupId}`,  (message) => {
         this.onMessageReceived(JSON.parse(message.body));
       });
     });
  }

  onMessageReceived(message: IMessage) {
    this.groupChatMessages.messages = [...this.groupChatMessages.messages, message];
    this.content.scrollToBottom(300);
  }

  onSendMessage() {
   this.stompClient.send(`/app/message/${this.groupChatMessages.groupChat.id}`, {},
     JSON.stringify({message: this.userMessage, userId: this.account.id}));
    this.userMessage = ''; // clear text input
    this.content.scrollToBottom(300);
  }

  formatTags(tags) {
    if (tags) {
      return tags.map(t => `#${t}`).join(' ');
    }

    return '';
  }

  isByMe(senderId) {
    if (this.account) {
      return this.account.id === senderId;
    }

    return false;
  }
}
