import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomehtmlComponent } from './somehtml.component';

describe('SomehtmlComponent', () => {
  let component: SomehtmlComponent;
  let fixture: ComponentFixture<SomehtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomehtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomehtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
