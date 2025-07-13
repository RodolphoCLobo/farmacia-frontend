import { TestBed } from '@angular/core/testing';

import { Fabricantes } from './fabricantes';

describe('Fabricantes', () => {
  let service: Fabricantes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fabricantes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
