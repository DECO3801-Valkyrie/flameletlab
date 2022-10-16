import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewsFeedService} from '../../providers/news-feed.service';
import {INewsArticle} from '../../model/news-article';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsFeed?: Array<INewsArticle>;
  originalFeed: Array<INewsArticle>;
  loading = false;

  constructor(
    private router: Router,
    private newsService: NewsFeedService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.newsService.getNewsFeed().subscribe( {
      next: (resp) => {
        this.newsFeed = resp.body.map((n, i) => ({id: i,...n}));
        this.originalFeed = [...this.newsFeed];
        this.newsService.setCache(this.newsFeed);
        this.loading = false;
      }
    });
  }

  checkoutArticle(article?: INewsArticle) {
    this.newsService.article = article;
    window.open(article.url, '_blank').focus();
  }

  onSearch(event) {
    if (event.target.value === '') {
      this.newsFeed = [...this.originalFeed];
      return;
    }

    this.newsFeed = this.originalFeed.filter(a => a.title.includes(event.target.value));
  }
}
