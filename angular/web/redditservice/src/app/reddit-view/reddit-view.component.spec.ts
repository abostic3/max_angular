import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditViewComponent } from './reddit-view.component';

describe('RedditViewComponent', () => {
  let component: RedditViewComponent;
  let fixture: ComponentFixture<RedditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
