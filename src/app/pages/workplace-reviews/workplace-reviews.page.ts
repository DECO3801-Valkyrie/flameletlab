import {Component, OnInit} from '@angular/core';
import {IWorkplaceRating} from "../../model/workplace-rating";
import {EntityArrayResponseType, WorkplaceRatingService} from "../../providers/workplace-rating.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-workplace-reviews',
  templateUrl: './workplace-reviews.page.html',
  styleUrls: ['./workplace-reviews.page.scss'],
})
export class WorkplaceReviewsPage implements OnInit {

  reviews?: IWorkplaceRating[];

  constructor(private workplaceRatingService: WorkplaceRatingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.route.params.subscribe(params => {
      this.workplaceRatingService.getAllRatingsByPlaceId(params.placeId).subscribe({
        next: (res: EntityArrayResponseType) => {
          this.reviews = res.body;
        },
      });
    });
  }

}
