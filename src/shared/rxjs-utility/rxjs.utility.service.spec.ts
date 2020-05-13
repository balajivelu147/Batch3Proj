import { TestBed } from '@angular/core/testing';

import { RxjsUtilityService } from './RxjsUtility.service';

describe('RxjsUtilityService', () => {
  let service: RxjsUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
