import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvWorkComponent } from './my-cv-work.component';

describe('MyCvWorkComponent', () => {
  let component: MyCvWorkComponent;
  let fixture: ComponentFixture<MyCvWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCvWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCvWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
