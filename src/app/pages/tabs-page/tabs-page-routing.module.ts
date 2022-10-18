import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs-page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'workplace-rater',
        loadChildren: () => import('../workplace-rater/workplace-rater.module').then(m => m.WorkplaceRaterPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
