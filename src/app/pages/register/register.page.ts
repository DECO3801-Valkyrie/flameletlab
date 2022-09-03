import {Router} from '@angular/router';
import {RegisterService} from '../../providers/register.service';
import {NgForm} from '@angular/forms';
import {IRegister} from '../../model/register';
import {Component} from '@angular/core';

@Component({
  selector: 'app-page-register',
  templateUrl: 'register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registrationDetails: IRegister = { email: '', password: '', fullName: '' };
  submitted = false;

  constructor(
    public router: Router,
    public registerService: RegisterService,
  ) {}

  onRegister(form: NgForm) {
    if (form.valid) {
      this.registerService.registerNewUser(this.registrationDetails).subscribe(
        () => {
          this.submitted = true;
        //  this.router.navigateByUrl('/dashboard');
        },
        response => this.processError(response)
      );
    }
  }

  processError(response) {
    console.log(response);
  }
}
