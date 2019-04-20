import { TestBed } from '@angular/core/testing';

import { BugsResolver } from './bugs-resolver.service';

describe('BugsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugsResolver = TestBed.get(BugsResolver);
    expect(service).toBeTruthy();
  });
});
