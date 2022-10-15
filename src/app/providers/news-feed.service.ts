import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {INewsArticle} from '../model/news-article';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';


type EntityArrayResponseType = HttpResponse<INewsArticle[]>;

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  article?: INewsArticle;
  constructor(private http: HttpClient) { }

  getNewsFeed(): Observable<EntityArrayResponseType> {
    return this.http.get<INewsArticle[]>(SERVER_API_URL + `api/news-article`, { observe: 'response' });
  }
}
