import { TestBed } from '@angular/core/testing';

import { HadithItemsService } from './hadith-items.service';

describe('HadithItemsService', () => {
  let service: HadithItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HadithItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
