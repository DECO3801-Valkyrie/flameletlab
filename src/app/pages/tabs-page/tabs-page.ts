import {Router} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'app-tabs-page',
  templateUrl: 'tabs-page.html',
  styleUrls: ['./tabs-page.scss'],
})
export class TabsPage {

  constructor(
    public router: Router
  ) { }

}
