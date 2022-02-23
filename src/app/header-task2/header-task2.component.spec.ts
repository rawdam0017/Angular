import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTask2Component } from './header-task2.component';

describe('HeaderTask2Component', () => {
  let component: HeaderTask2Component;
  let fixture: ComponentFixture<HeaderTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
