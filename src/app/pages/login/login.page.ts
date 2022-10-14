import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ILogin} from '../../model/login';
import {LoginService} from '../../providers/core/auth/login.service';


@Component({
  selector: 'app-page-login',
  templateUrl: 'login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginDetails: ILogin = { email: '', password: '', remember: true};
  loginError = false;
  submitted: any | boolean;

  constructor(
    public router: Router,
    public loginService: LoginService
  ) { }

  onLogin(form: NgForm) {
    if (form.valid) {
      this.loginService
        .login(this.loginDetails)
        .then(() => {
          this.loginError = false;
          this.router.navigateByUrl('/dashboard');
        })
        .catch(() => {
          this.loginError = true;
          console.log('Error thrown!!!');
        });
    }
  }

  onRegister() {
    this.router.navigateByUrl('/register');
  }

  handleError(error) {
    // do something
  }

}
