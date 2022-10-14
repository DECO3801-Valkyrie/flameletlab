import {Injectable} from '@angular/core';
import {FLAMELET_EMOITIONS, SERVER_API_URL} from '../app.constants';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FlameletService {

  private flameletImage: string;
  private flameletMessage: string;

  constructor(private http: HttpClient) {
    this.flameletMessage = '';
  }

  setFlameLetImage(emotion) {
    this.flameletImage = FLAMELET_EMOITIONS[emotion];
  }

  setFlameLetMessage(message) {
    this.flameletMessage = message;
  }

  getFlameLetMessage() {
    return this.flameletMessage;
  }

  getFlameLetImage(): string {
    return this.flameletImage;
  }

  getTodoMood(id: number): Observable<any> {
    return this.http.post(SERVER_API_URL + `api/flamelet/`, {id}, { observe: 'response' });
  }

  getConcerned(): Observable<any> {
    return this.http.get(SERVER_API_URL + `api/flamelet/`,  { observe: 'response' });
  }
}
