import { TestBed } from '@angular/core/testing';

import { FootballserviceService } from './footballservice.service';

describe('FootballserviceService', () => {
  let service: FootballserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
