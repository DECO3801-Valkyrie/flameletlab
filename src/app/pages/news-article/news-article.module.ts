import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsArticlePageRoutingModule } from './news-article-routing.module';

import { NewsArticlePage } from './news-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsArticlePageRoutingModule
  ],
  declarations: [NewsArticlePage]
})
export class NewsArticlePageModule {}
