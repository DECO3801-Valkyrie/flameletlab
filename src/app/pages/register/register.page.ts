import {Router} from '@angular/router';
import {RegisterService} from '../../providers/register.service';
import {NgForm} from '@angular/forms';
import {IRegister} from '../../model/register';
import {Component} from '@angular/core';
import {AccountService} from '../../providers/core/auth/account.service';
import {IOccupationType} from "../../model/occupation-type";

@Component({
  selector: 'app-page-register',
  templateUrl: 'register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registrationDetails: IRegister = { email: '', password: '', fullName: '', occupationTypeId: 0 };
  submitted = false;
  occupationTypes: IOccupationType[] = [];
  selectedOccupation;

  constructor(
    public router: Router,
    public accountService: AccountService,
    public registerService: RegisterService,
  ) {}

  ionViewDidEnter() {
    this.accountService.getAllOccupationTypes().subscribe({
      next: (resp) => {
        this.occupationTypes = resp.body;
      }
    });
  }

  onRegister(form: NgForm) {
    if (form.valid) {
      this.registrationDetails.occupationTypeId = this.selectedOccupation;
      this.registerService.registerNewUser(this.registrationDetails).subscribe(
        () => {
          this.submitted = true;
          this.router.navigateByUrl('/login');
        },
        response => this.processError(response)
      );
    }
  }

  processError(response) {
    console.log(response);
  }
}
