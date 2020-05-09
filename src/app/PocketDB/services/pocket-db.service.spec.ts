import { TestBed } from '@angular/core/testing';

import { PocketDbService } from './pocket-db.service';

describe('PocketDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocketDbService = TestBed.get(PocketDbService);
    expect(service).toBeTruthy();
  });
});
