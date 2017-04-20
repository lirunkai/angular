import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAngularComponent } from './some-angular.component';

describe('SomeAngularComponent', () => {
  let component: SomeAngularComponent;
  let fixture: ComponentFixture<SomeAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
