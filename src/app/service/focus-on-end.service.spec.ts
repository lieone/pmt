import { TestBed } from '@angular/core/testing';

import { FocusOnEndService } from './focus-on-end.service';

describe('FocusOnEndService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FocusOnEndService = TestBed.get(FocusOnEndService);
    expect(service).toBeTruthy();
  });
});
