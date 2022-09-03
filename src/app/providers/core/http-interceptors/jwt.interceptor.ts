import {LocalStorageService} from 'ngx-webstorage';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../../../app.constants';

export class JwtInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (/^http/.test(request.url) && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
      return next.handle(request);
    }

    const jwt = this.localStorage.retrieve('jwt');
    if (!!jwt) {
      request = request.clone({
        setHeaders: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: 'Bearer ' + jwt
        }
      });
    }
    return next.handle(request);
  }
}
