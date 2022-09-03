import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AccountService} from './account.service';

@Injectable({ providedIn: 'root' })
export class PrincipalService {
  private loggedInUserIdentity: any;
  private authenticated = false;
  private authState = new Subject<any>();

  constructor(private accountService: AccountService) {}

  authenticate(identity) {
    this.loggedInUserIdentity = identity;
    this.authenticated = identity !== null;
    this.authState.next(this.loggedInUserIdentity);
  }

  identity(force?: boolean): Promise<any> {
    if (force === true) {
      this.loggedInUserIdentity = undefined;
    }

    /* If we've already retrieved the user identify from server resolve immediately */
    if (this.loggedInUserIdentity) {
      return Promise.resolve(this.loggedInUserIdentity);
    }

    /* Get the user identify from server, set it and then resolve */
    return this.accountService
      .get()
      .toPromise()
      .then(response => {
        const userAccount = response.body;
        if (userAccount) {
          this.loggedInUserIdentity = userAccount;
          this.authenticated = true;
        } else {
          this.loggedInUserIdentity = null;
          this.authenticated = false;
        }
        this.authState.next(this.loggedInUserIdentity);
        return this.loggedInUserIdentity;
      })
      .catch(err => {
        this.loggedInUserIdentity = null;
        this.authenticated = false;
        this.authState.next(this.loggedInUserIdentity);
        return null;
      });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  isIdentityResolved(): boolean {
    return this.loggedInUserIdentity !== undefined;
  }

  getAuthenticationState(): Observable<any> {
    return this.authState.asObservable();
  }

}
