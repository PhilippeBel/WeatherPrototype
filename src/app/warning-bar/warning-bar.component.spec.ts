import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningBarComponent } from './warning-bar.component';

describe('WarningBarComponent', () => {
  let component: WarningBarComponent;
  let fixture: ComponentFixture<WarningBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
