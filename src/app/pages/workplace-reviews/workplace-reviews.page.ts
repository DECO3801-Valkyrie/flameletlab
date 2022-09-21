import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-workplace-reviews',
  templateUrl: './workplace-reviews.page.html',
  styleUrls: ['./workplace-reviews.page.scss'],
})
export class WorkplaceReviewsPage implements OnInit {

  reviews = [1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
