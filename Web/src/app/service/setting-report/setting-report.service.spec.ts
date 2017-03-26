/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SettingReportService } from './setting-report.service';

describe('SettingReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingReportService]
    });
  });

  it('should ...', inject([SettingReportService], (service: SettingReportService) => {
    expect(service).toBeTruthy();
  }));
});
