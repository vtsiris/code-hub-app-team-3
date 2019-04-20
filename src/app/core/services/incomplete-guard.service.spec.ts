import { TestBed } from '@angular/core/testing';

import { IncompleteGuardService } from './incomplete-guard.service';

describe('IncompleteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncompleteGuardService = TestBed.get(IncompleteGuardService);
    expect(service).toBeTruthy();
  });
});
