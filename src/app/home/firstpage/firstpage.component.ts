import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';


@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor(private article_service: ArticleService) { }

  ngOnInit() {
    this.article_service.LaravelTest().subscribe(
      (data) => {
        console.log(data, 'laravel test');
      },
      (error) => {
        console.log(error, 'laravel error');
      },
    );
  }

}
