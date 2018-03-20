import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  constructor(private router: Router, private search_article: ArticleService) { }

  ngOnInit() {
  }
  searchArticle(value: string) {
    this.search = value
    // 跳转到cat_articles 路由，并传参数search = this.search
    this.router.navigate(['cat_articles', ''], { queryParams: { search: this.search } });
  }
}
