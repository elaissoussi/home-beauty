import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircarePage } from './haircare.page';

describe('HaircarePage', () => {
  let component: HaircarePage;
  let fixture: ComponentFixture<HaircarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
