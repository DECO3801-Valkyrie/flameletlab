import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../../../app.constants';
import {map} from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class JwtAuthService {

  constructor(private http: HttpClient, private $localStorage: LocalStorageService) {
  }

  getToken() {
    this.$localStorage.retrieve('jwt');
  }

  performLogin(credentials): Observable<any> {
    const data = {
      email: credentials.email,
      password: credentials.password,
      remember: credentials.remember
    };
    return this.http.post(SERVER_API_URL + 'api/authenticate', data, { observe: 'response' }).pipe(map(authenticateSuccess.bind(this)));

    function authenticateSuccess(resp) {
      const jwt = resp.body.token;
      this.saveAuthToken(jwt);
      return jwt;
    }
  }

  saveAuthToken(jwt) {
    this.$localStorage.store('jwt', jwt);
  }

  performLogout(): Observable<any> {
    return new Observable(observer => {
      this.$localStorage.clear('jwt');
      observer.complete();
    });
  }

}
