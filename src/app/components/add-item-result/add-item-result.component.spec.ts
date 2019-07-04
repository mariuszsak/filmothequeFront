import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemResultComponent } from './add-item-result.component';

describe('AddItemResultComponent', () => {
  let component: AddItemResultComponent;
  let fixture: ComponentFixture<AddItemResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
