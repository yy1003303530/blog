import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit {
  article_id: number;
  article: any;
  content
  constructor(private  route: ActivatedRoute, private articleservice: ArticleService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.article_id = params['id'];
       /* console.log(this.article_id, typeof(this.article_id));*/
      }
    );
    this.getArticle(this.article_id);
  }
  getArticle(id) {
      this.articleservice.GetArticle(id).subscribe(
        (data) => {
          this.article = data;
         // 图片地址强加的服务器地址
          this.content = (data['content'] + '').replace('/media/article/ueditor/', 'http://127.0.0.1:8000/media/article/ueditor/')
          /*console.log(this.content, 'content', typeof (this.content))*/
          this.article.content = this.sanitizer.bypassSecurityTrustHtml(this.content);
        },
        (error) => {}
      );
  }

}
