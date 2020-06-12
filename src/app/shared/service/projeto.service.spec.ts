import { TestBed } from '@angular/core/testing';

import { ProjetoService } from './projeto.service';

describe('ProjetoService', () => {
  let service: ProjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
