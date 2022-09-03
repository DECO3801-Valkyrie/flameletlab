import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injector} from '@angular/core';
import {tap} from 'rxjs/operators';
import {JwtAuthService} from '../auth/jwt-auth.service';

export class JwtExpiredInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              const jwtAuthService: JwtAuthService  = this.injector.get(JwtAuthService);
              jwtAuthService.performLogout();
            }
          }
        }
      )
    );
  }
}
