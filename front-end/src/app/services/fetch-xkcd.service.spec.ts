import { TestBed } from '@angular/core/testing';

import { FetchXkcdService } from './fetch-xkcd.service';

describe('FetchXkcdService', () => {
  let service: FetchXkcdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchXkcdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
