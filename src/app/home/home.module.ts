import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import {DataListModule} from 'primeng/primeng';
import { HotarticleComponent } from './hotarticle/hotarticle.component';

import {ArticlesCategoryComponent} from './articlecategory/article_category.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DataListModule,
  ],
  declarations: [HomeComponent, ArticlesCategoryComponent, FirstpageComponent, ArticledetailComponent, HotarticleComponent, SearchComponent]
})
export class HomeModule { }
