import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbyeComponent } from './gbye.component';

describe('GbyeComponent', () => {
  let component: GbyeComponent;
  let fixture: ComponentFixture<GbyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
