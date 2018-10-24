import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvEnducationComponent } from './my-cv-enducation.component';

describe('MyCvEnducationComponent', () => {
  let component: MyCvEnducationComponent;
  let fixture: ComponentFixture<MyCvEnducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCvEnducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCvEnducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
