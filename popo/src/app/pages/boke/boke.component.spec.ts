import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BokeComponent } from './boke.component';

describe('BokeComponent', () => {
  let component: BokeComponent;
  let fixture: ComponentFixture<BokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
