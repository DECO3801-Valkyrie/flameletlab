import {Injectable} from '@angular/core';
import {IWhiteNoise} from '../model/white-noise';
import {SERVER_API_URL} from '../app.constants';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';

type EntityArrayResponseType = HttpResponse<IWhiteNoise[]>;

@Injectable({
  providedIn: 'root'
})
export class WhiteNoiseService {

  private resourceUrl = SERVER_API_URL + 'api/white-noise';
  private audio;

  constructor(private http: HttpClient) {
    this.audio = null;
  }


  getAll(): Observable<EntityArrayResponseType> {
    return this.http
      .get<IWhiteNoise[]>(this.resourceUrl, { observe: 'response' });
  }

  play(audioPath: string) {
    if (this.audio == null) {
      this.audio = new Audio(SERVER_API_URL + 'white-noise/' + audioPath);
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = new Audio(SERVER_API_URL + 'white-noise/' + audioPath);
    }
    this.audio.play();
  }

}
