import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WorkplaceReviewsPageRoutingModule} from './workplace-reviews-routing.module';

import {WorkplaceReviewsPage} from './workplace-reviews.page';
import {StarRatingModule} from "angular-star-rating";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WorkplaceReviewsPageRoutingModule,
        StarRatingModule
    ],
  declarations: [WorkplaceReviewsPage]
})
export class WorkplaceReviewsPageModule {}
