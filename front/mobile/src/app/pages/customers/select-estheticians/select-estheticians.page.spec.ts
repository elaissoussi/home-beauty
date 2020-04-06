import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEstheticiansPage } from './select-estheticians.page';

describe('SelectEstheticiansPage', () => {
  let component: SelectEstheticiansPage;
  let fixture: ComponentFixture<SelectEstheticiansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEstheticiansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEstheticiansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
