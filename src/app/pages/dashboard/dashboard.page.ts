import {Router} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  constructor(
    public router: Router
  ) { }

}
