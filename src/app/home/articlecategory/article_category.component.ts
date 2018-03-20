import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {LazyLoadEvent} from 'primeng/api';


@Component({
  selector: 'app-article-category',
  templateUrl: './article_category.component.html',
  styleUrls: ['./article_category.component.css']
})
export class ArticlesCategoryComponent implements OnInit {
  search_content: string;
  constructor(private route: ActivatedRoute, private article_service: ArticleService) { }
  category_name: string;
  apiFilter: any;
  articles: any;
  totalRecords: number; /*总数量*/
  ngOnInit() {
    this.apiFilter = {
      'limit': 10,
    };
    this.route.params.subscribe(
      (param: Params) => {
        this.category_name = param['category_name'];
        if (this.category_name) {
          this.apiFilter = {
            'limit': 10,
            'category__name': this.category_name,
          };
          console.log('Params');
          this.getArticles();
        }
      }
    );
    this.route.queryParams.subscribe(
      (queryParams) => {
        this.search_content = queryParams.search;
        if (this.search_content) {
          this.apiFilter = {
            'limit': 10,
            'search': this.search_content,
          };
          console.log('queryParams');
          this.getArticles();
        }
      }
    );
  }
  loadArticlesLazy(event: LazyLoadEvent) {
    // console.log(event, '下一页面');
    if (event.rows) {
      this.apiFilter.limit = event.rows;  /*每页显示的对象的数量 */
    }
    if (event.rows) {
      this.apiFilter.page = Math.ceil(event.first / event.rows) + 1; /*当前页码数 */
    }
    /* if (event.sortField) {
       this.apiFilter.orderBy = event.sortField;
     }
     if (event.sortOrder) {
       this.apiFilter.sortedBy = event.sortOrder > 0 ? 'asc' : 'desc';
     }*/
    this.getArticles();
  }
  getArticles() {
    this.article_service.GetArticles(this.apiFilter).subscribe(
      (data) => {
        this.articles = data['results'];
        console.log(this.articles, 'this.art')
        this.totalRecords = data['count'];
      },
      (error) => {},
    );
  }

}
