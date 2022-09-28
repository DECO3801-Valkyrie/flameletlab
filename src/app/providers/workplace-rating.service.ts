import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {IWorkplaceRatingRequest} from '../model/workplace-rating-request';
import {IWorkplaceRating} from '../model/workplace-rating';
import {IWorkplace} from '../model/workplace';

export type EntityResponseType = HttpResponse<IWorkplaceRating>;
export type EntityArrayResponseType = HttpResponse<IWorkplaceRating[]>;

@Injectable({providedIn: 'root'})
export class WorkplaceRatingService {
  constructor(private http: HttpClient) {}

  createNewRating(reviewAndRating: IWorkplaceRatingRequest): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + 'api/workplace-ratings', reviewAndRating, {observe: 'response'});
  }

  getAllRatingsByPlaceId(placeId: string): Observable<EntityArrayResponseType> {
    return this.http.get<IWorkplaceRating[]>(SERVER_API_URL + `api/workplace-ratings/${placeId}`, { observe: 'response' });
  }

  getAllWorkplaces(): Observable<HttpResponse<IWorkplace[]>> {
    return this.http.get<IWorkplace[]>(SERVER_API_URL + 'api/workplace-ratings/workplaces', { observe: 'response' });
  }

}
