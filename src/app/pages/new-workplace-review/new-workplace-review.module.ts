import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewWorkplaceReviewPageRoutingModule} from './new-workplace-review-routing.module';

import {NewWorkplaceReviewPage} from './new-workplace-review.page';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewWorkplaceReviewPageRoutingModule,
        AutocompleteLibModule
    ],
  declarations: [NewWorkplaceReviewPage]
})
export class NewWorkplaceReviewPageModule {}
