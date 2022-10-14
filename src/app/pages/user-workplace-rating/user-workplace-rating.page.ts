import {Component, OnInit} from '@angular/core';
import {RatingChangeEvent} from 'angular-star-rating';
import {ActivatedRoute, Router} from '@angular/router';
import {IWorkplaceRatingRequest} from '../../model/workplace-rating-request';
import {GooglePlacesApiService} from '../../providers/google-places-api.service';
import {WorkplaceRatingService} from '../../providers/workplace-rating.service';

@Component({
  selector: 'app-user-workplace-rating',
  templateUrl: './user-workplace-rating.page.html',
  styleUrls: ['./user-workplace-rating.page.scss'],
})
export class UserWorkplaceRatingPage implements OnInit {
  reviewAndRating: IWorkplaceRatingRequest = {review: '', rating: 0, placeId: '', placeLocation: '', placeName: ''};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private googlePlacesApiService: GooglePlacesApiService,
              private workplaceRatingService: WorkplaceRatingService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.reviewAndRating.placeId = params.placeId;
      this.reviewAndRating.review = '';
      this.reviewAndRating.rating = 0;
      this.googlePlacesApiService.getPlaceByPlaceId(params.placeId).subscribe(
        res => {
          this.reviewAndRating.placeName = res.body.result.name;
          this.reviewAndRating.placeLocation = res.body.result.formatted_address;
        },
        error => {
          // do error stuff
        }
      );
    });
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    this.reviewAndRating.rating = $event.rating;
  };

  onSubmit() {
    this.workplaceRatingService.createNewRating(this.reviewAndRating).subscribe(
      () => {
        this.router.navigateByUrl('/workplace-reviews/' + this.reviewAndRating.placeId);
      },
      response => {
        // handle error
      }
    );
  }

}
