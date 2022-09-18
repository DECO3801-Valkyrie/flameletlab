import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WorkplaceRaterPageRoutingModule} from './workplace-rater-routing.module';

import {WorkplaceRaterPage} from './workplace-rater.page';
import {StarRatingModule} from "angular-star-rating";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkplaceRaterPageRoutingModule,
    StarRatingModule
  ],
  declarations: [WorkplaceRaterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkplaceRaterPageModule {}
