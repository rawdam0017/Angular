import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdarTask2Component } from './navdar-task2.component';

describe('NavdarTask2Component', () => {
  let component: NavdarTask2Component;
  let fixture: ComponentFixture<NavdarTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavdarTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavdarTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
