import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {INewGroupRequest} from '../model/new-group-request';
import {IGroupChat} from '../model/group-chat';
import {IChatMessages} from '../model/group-chat-messages';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private http: HttpClient) {}

  createNewGroup(group: INewGroupRequest): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + 'api/group-chat', group, {observe: 'response'});
  }

  join(groupId: number): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + `api/group-chat/${groupId}/join`, {}, {observe: 'response'});
  }

  leave(groupId: number): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + `api/group-chat/${groupId}/leave`, {}, {observe: 'response'});
  }

  getGroupChats(options: any) {
    return this.http.get<IGroupChat[]>(SERVER_API_URL + 'api/group-chat/', { params: options, observe: 'response' });
  }

  getGroupChatMessages(groupId) {
    return this.http.get<IChatMessages>(SERVER_API_URL + `api/group-chat/${groupId}/messages`,
      { observe: 'response' });
  }
}
