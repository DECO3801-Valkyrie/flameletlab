import {Component, OnInit} from '@angular/core';
import {RatingChangeEvent} from 'angular-star-rating';

@Component({
  selector: 'app-user-workplace-rating',
  templateUrl: './user-workplace-rating.page.html',
  styleUrls: ['./user-workplace-rating.page.scss'],
})
export class UserWorkplaceRatingPage implements OnInit {

  private rating = 0;

  constructor() { }

  ngOnInit() {
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    this.rating = $event.rating;
  };
}
