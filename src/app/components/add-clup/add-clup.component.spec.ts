import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClupComponent } from './add-clup.component';

describe('AddClupComponent', () => {
  let component: AddClupComponent;
  let fixture: ComponentFixture<AddClupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
