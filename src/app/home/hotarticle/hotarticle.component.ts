import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {ApiFilter} from '../../services/interfaces';

@Component({
  selector: 'app-hotarticle',
  templateUrl: './hotarticle.component.html',
  styleUrls: ['./hotarticle.component.css']
})
export class HotarticleComponent implements OnInit {

  constructor(private article_service: ArticleService) { }
  apiFilter: any;
  hot_articles: any
  ngOnInit() {
    this.apiFilter = {
        is_hot: true,
        limit: 10,
        page: 1,
    };
    this.getHotArticles();
  }
  getHotArticles() {
    this.article_service.GetArticles(this.apiFilter).subscribe(
      (data) => {
        this.hot_articles = data['results'];
        // console.log(this.hot_articles, 'hot_articles');
      },
      (error) => {}
    );
  }
}
