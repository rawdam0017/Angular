import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTask2Component } from './main-task2.component';

describe('MainTask2Component', () => {
  let component: MainTask2Component;
  let fixture: ComponentFixture<MainTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
