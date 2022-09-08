import {Injectable} from "@angular/core";
import {IWhiteNoise} from "../model/white-noise";
import {SERVER_API_URL} from "../app.constants";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";

type EntityArrayResponseType = HttpResponse<IWhiteNoise[]>;

@Injectable({
  providedIn: 'root'
})
export class WhiteNoiseService {

  constructor(private http: HttpClient) {}
  private resourceUrl = SERVER_API_URL + 'api/white-noise';

  getAll(): Observable<EntityArrayResponseType> {
    return this.http
      .get<IWhiteNoise[]>(this.resourceUrl, { observe: 'response' });
  }
}
