import { TestBed } from '@angular/core/testing';

import { ServiciosControllerService } from './servicios-controller.service';

describe('ServiciosControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosControllerService = TestBed.get(ServiciosControllerService);
    expect(service).toBeTruthy();
  });
});
