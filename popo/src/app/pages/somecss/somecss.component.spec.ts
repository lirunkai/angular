import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomecssComponent } from './somecss.component';

describe('SomecssComponent', () => {
  let component: SomecssComponent;
  let fixture: ComponentFixture<SomecssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomecssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomecssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
