import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAlertComponent } from './c-alert.component';

describe('CAlertComponent', () => {
  let component: CAlertComponent;
  let fixture: ComponentFixture<CAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
