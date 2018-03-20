import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCategoryComponent } from './article_category.component';

describe('AboutComponent', () => {
  let component: ArticlesCategoryComponent;
  let fixture: ComponentFixture<ArticlesCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
