import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewWorkplaceReviewPage} from './new-workplace-review.page';

const routes: Routes = [
  {
    path: '',
    component: NewWorkplaceReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWorkplaceReviewPageRoutingModule {}
