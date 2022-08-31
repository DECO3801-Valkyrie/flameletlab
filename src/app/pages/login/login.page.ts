import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-page-login',
  templateUrl: 'login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  submitted = false;

  constructor(
    public router: Router
  ) { }

}
