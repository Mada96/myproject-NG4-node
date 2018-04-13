import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClupDetailsComponent } from './clup-details.component';

describe('ClupDetailsComponent', () => {
  let component: ClupDetailsComponent;
  let fixture: ComponentFixture<ClupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
