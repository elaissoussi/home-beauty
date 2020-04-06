import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidePage } from './aide.page';

describe('AidePage', () => {
  let component: AidePage;
  let fixture: ComponentFixture<AidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
