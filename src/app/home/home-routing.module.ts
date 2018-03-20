import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {FirstpageComponent} from './firstpage/firstpage.component';
import {ArticledetailComponent} from './articledetail/articledetail.component';
import {ArticlesCategoryComponent} from './articlecategory/article_category.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
                children: [
                    { path: '', component: FirstpageComponent },
                    { path: 'home', component: FirstpageComponent },
                    { path: 'article/:id', component: ArticledetailComponent },
                    { path: 'cat_articles/:category_name', component: ArticlesCategoryComponent },

                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}
