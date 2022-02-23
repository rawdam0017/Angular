import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTask2Component } from './footer-task2.component';

describe('FooterTask2Component', () => {
  let component: FooterTask2Component;
  let fixture: ComponentFixture<FooterTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
