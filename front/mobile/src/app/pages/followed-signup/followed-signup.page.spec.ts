import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedSignupPage } from './followed-signup.page';

describe('FollowedSignupPage', () => {
  let component: FollowedSignupPage;
  let fixture: ComponentFixture<FollowedSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowedSignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
