import {GOOGLE_PLACES_API_KEY, SERVER_API_URL} from '../app.constants';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAccount} from '../model/account';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesApiService {

  constructor(public http: HttpClient) {
  }


  getSearchResults(query): Observable<HttpResponse<any>> {
    return this.http.get<IAccount>(`${SERVER_API_URL}places-api/query?query=${query}`, { observe: 'response' });
  }

  getPlaceByPlaceId(placeId): Observable<HttpResponse<any>> {
      return this.http.get<IAccount>(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_PLACES_API_KEY}`,
        { observe: 'response' });
  }


}
