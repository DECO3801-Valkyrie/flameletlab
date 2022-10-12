import {IGroupChat} from './group-chat';
import {IMessage} from './message';

export interface IChatMessages {
  groupChat: IGroupChat;
  messages: Array<IMessage>;
}
