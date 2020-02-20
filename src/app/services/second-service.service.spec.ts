import { TestBed } from '@angular/core/testing';

import { SecondServiceService } from './second-service.service';

describe('SecondServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondServiceService = TestBed.get(SecondServiceService);
    expect(service).toBeTruthy();
  });
});
