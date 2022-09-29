import {Component, OnInit} from '@angular/core';
import {IWorkplaceRating} from '../../model/workplace-rating';
import {EntityArrayResponseType, WorkplaceRatingService} from '../../providers/workplace-rating.service';
import {ActivatedRoute} from '@angular/router';
import {IWorkplace} from '../../model/workplace';

@Component({
  selector: 'app-workplace-reviews',
  templateUrl: './workplace-reviews.page.html',
  styleUrls: ['./workplace-reviews.page.scss'],
})
export class WorkplaceReviewsPage implements OnInit {

  reviews?: IWorkplaceRating[];
  workplace?: IWorkplace;
  selectedReview?: IWorkplaceRating;
  isDetailsModalOpen = false;

  constructor(private workplaceRatingService: WorkplaceRatingService,
              private route: ActivatedRoute) { }



  setIsDetailsModalOpen(isOpen: boolean) {
    this.isDetailsModalOpen = isOpen;
  }

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
      this.workplaceRatingService.getWorkplaceByPlaceId(params.placeId).subscribe(
        {
          next: (res) => {
            this.workplace = res.body;
          }
        });
    });
  }

  onReviewClick(review: IWorkplaceRating) {
    this.selectedReview = review;
    this.isDetailsModalOpen = true;
  }

}
