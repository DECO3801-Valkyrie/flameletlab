import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITodoRequest} from '../../model/todo-request';
import {ITodo} from '../../model/todo';
import {SERVER_API_URL} from '../../app.constants';

export type EntityResponseType = HttpResponse<ITodo>;
export type EntityArrayResponseType = HttpResponse<ITodo[]>;

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private http: HttpClient) {}

  createTodo(todo: ITodoRequest): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + 'api/todo', todo, {observe: 'response'});
  }

  getAll(): Observable<any> {
    return this.http.get<any>(SERVER_API_URL + `api/todos/`, { observe: 'response' });
  }

}
