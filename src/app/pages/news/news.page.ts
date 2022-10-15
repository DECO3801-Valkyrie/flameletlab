import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewsFeedService} from '../../providers/news-feed.service';
import {INewsArticle} from '../../model/news-article';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsFeed?: INewsArticle[];

  constructor(
    private router: Router,
    private newsService: NewsFeedService
  ) { }

  ngOnInit() {
    this.newsService.getNewsFeed().subscribe( {
      next: (resp) => {
        this.newsFeed = resp.body.map(n => ({...n}));
      }
    });
  }

  checkoutArticle(article?: INewsArticle) {
    this.newsService.article = article;
    this.router.navigate(['/news-article']);
  }
}
