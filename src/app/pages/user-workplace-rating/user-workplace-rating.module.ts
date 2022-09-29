import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UserWorkplaceRatingPageRoutingModule} from './user-workplace-rating-routing.module';

import {UserWorkplaceRatingPage} from './user-workplace-rating.page';
import {StarRatingModule} from 'angular-star-rating';
import {WorkplaceRatingService} from '../../providers/workplace-rating.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserWorkplaceRatingPageRoutingModule,
        StarRatingModule
    ],
  declarations: [UserWorkplaceRatingPage]
})
export class UserWorkplaceRatingPageModule {

  constructor(private workplaceRatingService: WorkplaceRatingService) {
  }

  
}
