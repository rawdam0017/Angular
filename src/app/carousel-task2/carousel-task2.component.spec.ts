import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTask2Component } from './carousel-task2.component';

describe('CarouselTask2Component', () => {
  let component: CarouselTask2Component;
  let fixture: ComponentFixture<CarouselTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
