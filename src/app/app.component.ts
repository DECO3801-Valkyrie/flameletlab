import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./providers/core/auth/login.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'place-holder', url: '/folder/Spam', icon: 'warning' },
  ];

  dark = true;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router, private loginService: LoginService) {}

  onLogOut() {
    this.loginService.logout();
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }
}
