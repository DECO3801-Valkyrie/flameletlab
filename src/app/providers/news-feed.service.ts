import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {INewsArticle} from '../model/news-article';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';


type EntityArrayResponseType = HttpResponse<INewsArticle[]>;

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  cache: Array<INewsArticle> = [];
  article?: INewsArticle;
  constructor(private http: HttpClient) { }

  setCache(newCache: Array<INewsArticle>) {
    this.cache = newCache;
  }

  clearCache() {
    this.cache = [];
  }

  getCache() {
    return this.cache;
  }

  getNewsFeed(): Observable<EntityArrayResponseType> {
    return this.http.get<INewsArticle[]>(SERVER_API_URL + `api/newsfeed`, { observe: 'response' });
  }
}
