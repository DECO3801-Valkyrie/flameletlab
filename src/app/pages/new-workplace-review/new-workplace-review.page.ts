import {Component, OnInit} from '@angular/core';
import {GooglePlacesApiService} from '../../providers/google-places-api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-workplace-review',
  templateUrl: './new-workplace-review.page.html',
  styleUrls: ['./new-workplace-review.page.scss'],
})
export class NewWorkplaceReviewPage implements OnInit {
  public data: Array<any> = [];
  public timeout: any;
  public keyword = 'name';
  public subscription: any;
  public selectedPlace: any = null;

  constructor(public googlePlacesApiService: GooglePlacesApiService, public  router: Router) { }


  ngOnInit() {
  }

  selectEvent(item) {
    this.selectedPlace = item;
  }

  onChangeSearch(val: string) {
    this.selectedPlace = null;

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.googlePlacesApiService.getSearchResults(val).subscribe(resp => {
      this.data = resp.body.predictions.map(p => ({
        id: p.place_id,
        name: p.structured_formatting.main_text,
        addressLine: p.structured_formatting.secondary_text
      }));
    }, error => {
      console.log(error);
    });

  }

  onFocused(e){
    // do something when input is focused
  }

  // we trust Google - it already filters
  filter(items: any[], query: string): any[] {
    return items;
  }

  onNext() {
     this.router.navigateByUrl( '/user-workplace-rating/' + this.selectedPlace.id);
  }

}
