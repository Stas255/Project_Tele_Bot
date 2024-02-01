import { TestBed } from '@angular/core/testing';

import { ElectronRenderServiceService } from './electron-render-service.service';

describe('ElectronRenderServiceService', () => {
  let service: ElectronRenderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronRenderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
