import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiFilter} from './interfaces';
import * as utils from './utils';

@Injectable()
export class ArticleService {
   // BaseUrl = 'http://127.0.0.1:8000/';
   BaseUrl = 'http://api.cxydog.com/';
   LaravelTestUrl = 'http://127.0.0.1/blog/public/api/test/1/yy'
  // BaseUrl = 'http://api.cxydog.com/';
  article_url: string = this.BaseUrl + 'articles/';
  // goodURL = 'http://shop.projectsedu.com:8001/goods';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http: HttpClient) { }
  public GetArticles(apiFilter?: ApiFilter) {
    let params = '';
    if (apiFilter) {
      params = '?' + utils.Json2Url(apiFilter);
    }
    console.log(this.article_url + params, 'article_url')
    return this.http.get(this.article_url + params, this.httpOptions);
  }
  public GetArticle(id) {
    return this.http.get(this.article_url + id + '/', this.httpOptions);
  }
  public LaravelTest() {
    return this.http.get(this.LaravelTestUrl, this.httpOptions);
  }
}
