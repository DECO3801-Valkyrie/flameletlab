import {DEFAULT_RADIUS, GOOGLE_PLACES_API_KEY} from '../app.constants';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAccount} from '../model/account';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesApiService {
  public url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_PLACES_API_KEY}&radius=${DEFAULT_RADIUS}&strictbounds=true&location=-25.274398%2C133.775136&components=country:au`;

  constructor(public http: HttpClient) {
  }


  getSearchResults(query): Observable<HttpResponse<any>> {
    return this.http.get<IAccount>(`${this.url}&input=${query}`, { observe: 'response' });
  }

  getPlaceByPlaceId(placeId): Observable<HttpResponse<any>> {
      return this.http.get<IAccount>(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_PLACES_API_KEY}`,
        { observe: 'response' });
  }


}
