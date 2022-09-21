import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserWorkplaceRatingPage} from './user-workplace-rating.page';

const routes: Routes = [
  {
    path: '',
    component: UserWorkplaceRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserWorkplaceRatingPageRoutingModule {}
