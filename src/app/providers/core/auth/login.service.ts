import {PrincipalService} from './principal.service';
import {JwtAuthService} from './jwt-auth.service';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private principalService: PrincipalService,
    private jwtAuthService: JwtAuthService
  ) {}

  login(credentials, callback?) {
    const cb = callback ||  (() => {});

    return new Promise((resolve, reject) => {
      this.jwtAuthService.performLogin(credentials).subscribe(
        data => {
          this.principalService.identity(true).then(account => {
            // Do something with account
            resolve(data);
          });
          return cb();
        },
        err => {
          this.logout();
          reject(err);
          return cb(err);
        }
      );
    });
  }

  logout() {
    this.jwtAuthService.performLogout().subscribe();
    this.principalService.authenticate(null);
  }
}
