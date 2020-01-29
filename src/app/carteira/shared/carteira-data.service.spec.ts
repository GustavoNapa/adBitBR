import { TestBed } from '@angular/core/testing';

import { CarteiraDataService } from './carteira-data.service';

describe('CarteiraDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarteiraDataService = TestBed.get(CarteiraDataService);
    expect(service).toBeTruthy();
  });
});
