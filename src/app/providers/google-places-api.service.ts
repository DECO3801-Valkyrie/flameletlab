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
    return this.http.get<IAccount>(`http://flameletlab.ddns.net/places-api/?input=${query}`, { observe: 'response' });
  }

  getPlaceByPlaceId(placeId): Observable<HttpResponse<any>> {
      return this.http.get<IAccount>(
        `http://flameletlab.ddns.net/places-api-details/?${placeId}`,
        { observe: 'response' });
  }


}
