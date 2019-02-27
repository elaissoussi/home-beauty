import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecxionPage } from './connecxion.page';

describe('ConnecxionPage', () => {
  let component: ConnecxionPage;
  let fixture: ComponentFixture<ConnecxionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnecxionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnecxionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
