import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {UserRouteAccessService} from './providers/core/auth/user-route-access.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'workplace-rater',
    loadChildren: () => import('./pages/workplace-rater/workplace-rater.module').then(m => m.WorkplaceRaterPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./pages/tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'add-new-tasks',
    loadChildren: () => import('./pages/add-new-tasks/add-new-tasks.module').then( m => m.AddNewTasksPageModule)
  },
  {
    path: 'new-workplace-review',
    loadChildren: () => import('./pages/new-workplace-review/new-workplace-review.module').then( m => m.NewWorkplaceReviewPageModule)
  },
  {
    path: 'user-workplace-rating',
    loadChildren: () => import('./pages/user-workplace-rating/user-workplace-rating.module').then( m => m.UserWorkplaceRatingPageModule)
  },
  {
    path: 'workplace-reviews',
    loadChildren: () => import('./pages/workplace-reviews/workplace-reviews.module').then( m => m.WorkplaceReviewsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
