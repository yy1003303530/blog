import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotarticleComponent } from './hotarticle.component';

describe('HotarticleComponent', () => {
  let component: HotarticleComponent;
  let fixture: ComponentFixture<HotarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
