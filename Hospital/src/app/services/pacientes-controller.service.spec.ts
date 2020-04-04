import { TestBed } from '@angular/core/testing';

import { PacientesControllerService } from './pacientes-controller.service';

describe('PacientesControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacientesControllerService = TestBed.get(PacientesControllerService);
    expect(service).toBeTruthy();
  });
});
