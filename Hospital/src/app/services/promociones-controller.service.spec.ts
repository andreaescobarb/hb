import { TestBed } from '@angular/core/testing';

import { PromocionesControllerService } from './promociones-controller.service';

describe('PromocionesControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromocionesControllerService = TestBed.get(PromocionesControllerService);
    expect(service).toBeTruthy();
  });
});
