import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImageViewPage } from './single-image-view.page';

describe('SingleImageViewPage', () => {
  let component: SingleImageViewPage;
  let fixture: ComponentFixture<SingleImageViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleImageViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImageViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
