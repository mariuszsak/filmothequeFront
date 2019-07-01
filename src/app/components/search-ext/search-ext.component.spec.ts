import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExtComponent } from './search-ext.component';

describe('SearchExtComponent', () => {
  let component: SearchExtComponent;
  let fixture: ComponentFixture<SearchExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
