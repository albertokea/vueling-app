import { TestBed } from '@angular/core/testing';

import { HttpRequestsInterceptor } from './http-requests.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpRequestsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpRequestsInterceptor = TestBed.inject(HttpRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
