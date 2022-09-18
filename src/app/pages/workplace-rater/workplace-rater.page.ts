import {Component, OnInit} from '@angular/core';
import {Config} from "@ionic/angular";

@Component({
  selector: 'app-workplace-rater',
  templateUrl: './workplace-rater.page.html',
  styleUrls: ['./workplace-rater.page.scss'],
})
export class WorkplaceRaterPage implements OnInit {

  workplaces = [];
  showSearchbar: boolean;
  ios: boolean;

  constructor(public config: Config) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
  }

}
