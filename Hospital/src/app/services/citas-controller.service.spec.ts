import { TestBed } from '@angular/core/testing';

import { CitasControllerService } from './citas-controller.service';

describe('CitasControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitasControllerService = TestBed.get(CitasControllerService);
    expect(service).toBeTruthy();
  });
});
