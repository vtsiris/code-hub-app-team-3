import { TestBed } from '@angular/core/testing';

import { BugsResolverService } from './bugs-resolver.service';

describe('BugsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugsResolverService = TestBed.get(BugsResolverService);
    expect(service).toBeTruthy();
  });
});
