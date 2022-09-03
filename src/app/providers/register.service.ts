import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerNewUser(account: any): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + 'api/register', account, {observe: 'response'});
  }
}
