import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitiesElemComponent } from './list-cities-elem.component';

describe('ListCitiesElemComponent', () => {
  let component: ListCitiesElemComponent;
  let fixture: ComponentFixture<ListCitiesElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCitiesElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCitiesElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
