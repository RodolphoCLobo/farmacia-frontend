import { TestBed } from '@angular/core/testing';

import { PricipioAtivos } from './principio-ativos';

describe('PricipioAtivos', () => {
  let service: PricipioAtivos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricipioAtivos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
