import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WorkplaceRaterPage} from './workplace-rater.page';

const routes: Routes = [
  {
    path: '',
    component: WorkplaceRaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkplaceRaterPageRoutingModule {}
