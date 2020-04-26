import { TestBed } from '@angular/core/testing';

import { AppointementService } from './appointement.service';

describe('AppointementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointementService = TestBed.get(AppointementService);
    expect(service).toBeTruthy();
  });
});
