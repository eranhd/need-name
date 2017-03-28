/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapsService } from './maps.service';

describe('MapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapsService]
    });
  });

  it('should ...', inject([MapsService], (service: MapsService) => {
    expect(service).toBeTruthy();
  }));
});
