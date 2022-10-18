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
    loadChildren: () => import('./pages/workplace-rater/workplace-rater.module').then(m => m.WorkplaceRaterPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'add-new-tasks',
    loadChildren: () => import('./pages/add-new-tasks/add-new-tasks.module').then( m => m.AddNewTasksPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new-workplace-review',
    loadChildren: () => import('./pages/new-workplace-review/new-workplace-review.module').then( m => m.NewWorkplaceReviewPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'user-workplace-rating/:placeId',
    loadChildren: () => import('./pages/user-workplace-rating/user-workplace-rating.module').then( m => m.UserWorkplaceRatingPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'workplace-reviews/:placeId',
    loadChildren: () => import('./pages/workplace-reviews/workplace-reviews.module').then( m => m.WorkplaceReviewsPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new-chat-group',
    loadChildren: () => import('./pages/new-chat-group/new-chat-group.module').then( m => m.NewChatGroupPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'chat-session/:groupId',
    loadChildren: () => import('./pages/chat-session/chat-session.module').then( m => m.ChatSessionPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [UserRouteAccessService]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
