import { TestBed } from '@angular/core/testing';

import { AuthTokenInterceptorsService } from './auth-token-interceptors.service';

describe('AuthTokenInterceptorsService', () => {
  let service: AuthTokenInterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTokenInterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
