import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClupComponent } from './view-clup.component';

describe('ViewClupComponent', () => {
  let component: ViewClupComponent;
  let fixture: ComponentFixture<ViewClupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
