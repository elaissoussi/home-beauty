import { TestBed } from '@angular/core/testing';

import { HaircaireService } from './haircaire.service';

describe('HaircaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HaircaireService = TestBed.get(HaircaireService);
    expect(service).toBeTruthy();
  });
});
