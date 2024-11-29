import { TestBed } from '@angular/core/testing';

import { SolicitudesContactosService } from './solicitudes-contactos.service';

describe('SolicitudesContactosService', () => {
  let service: SolicitudesContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
