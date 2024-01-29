import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { auththGuard } from './authth.guard';

describe('auththGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => auththGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
