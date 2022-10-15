import { Component, OnInit } from '@angular/core';
import {NewsFeedService} from '../../providers/news-feed.service';
import {INewsArticle} from "../../model/news-article";

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.page.html',
  styleUrls: ['./news-article.page.scss'],
})
export class NewsArticlePage implements OnInit {
  currArticle: INewsArticle;
  constructor(private newsService: NewsFeedService) { }

  ngOnInit() {
    this.currArticle = this.newsService.article;
  }

}
