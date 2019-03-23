import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaimentPage } from './paiment.page';

describe('PaimentPage', () => {
  let component: PaimentPage;
  let fixture: ComponentFixture<PaimentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaimentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaimentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
