import {Component, OnInit} from '@angular/core';
import {Config} from '@ionic/angular';
import {WorkplaceRatingService} from '../../providers/workplace-rating.service';
import {IWorkplace} from "../../model/workplace";

@Component({
  selector: 'app-workplace-rater',
  templateUrl: './workplace-rater.page.html',
  styleUrls: ['./workplace-rater.page.scss'],
})
export class WorkplaceRaterPage implements OnInit {

  workplaces?: IWorkplace[];
  originalWorkplaces?: IWorkplace[];
  showSearchbar: boolean;
  ios: boolean;
  queryText?: string;

  constructor(public config: Config, public workplaceRatingService: WorkplaceRatingService) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
    this.load();
  }

  load() {
    this.workplaceRatingService.getAllWorkplaces().subscribe({
      next: (resp) => {
        this.workplaces = [...resp.body];
        this.originalWorkplaces = [...resp.body];
      }
    });
  }

  onSearch() {
    this.workplaces = this.originalWorkplaces.filter(w => w.name.toLowerCase().includes(this.queryText.toLowerCase())
      || w.location.toLowerCase().includes(this.queryText.toLowerCase()));
  }

  onRefresh() {
    this.load();
  }

}
