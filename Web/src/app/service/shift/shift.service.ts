import { Injectable } from '@angular/core';
import { Shift } from '../../models/Shift';
import { Team } from '../../models/Team';
import { Report } from '../../models/Report';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class ShiftService {

  shift: Shift;
  isShiftStart: boolean;
  constructor() {
    if(!LocalStorageService.loadUser())
      this.isShiftStart = false;
    else{
      this.isShiftStart = true;
      console.log(LocalStorageService.loadUser().shifts[LocalStorageService.loadUser().shifts.length-1])
      this.shift = new Shift(LocalStorageService.loadUser().shifts[LocalStorageService.loadUser().shifts.length-1].team,LocalStorageService.loadUser().shifts[LocalStorageService.loadUser().shifts.length-1]);
    }
   }

  startShift(team: Team){
    this.shift = new Shift(team);
    this.isShiftStart = true;
  }

  addReport(report: Report){
    this.shift.addReport(report);
  }
}
