import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IAccount} from '../../../model/account';
import {SERVER_API_URL} from '../../../app.constants';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(private http: HttpClient) {}

  get(): Observable<HttpResponse<IAccount>> {
    return this.http.get<IAccount>(SERVER_API_URL + 'api/account', { observe: 'response' });
  }

  // Save Method not needed yet
  /*save(account: any): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + 'api/account', account, { observe: 'response' });
  }
  */

}
