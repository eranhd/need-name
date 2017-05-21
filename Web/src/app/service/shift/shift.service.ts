import { Injectable } from '@angular/core';
import { Shift } from '../../models/Shift';
import { Team } from '../../models/Team';
import { Report } from '../../models/Report';

@Injectable()
export class ShiftService {

  shift: Shift;
  isShiftStart: boolean;
  constructor() {
    this.isShiftStart = false;
   }

  startShift(team: Team){
    this.shift = new Shift(team);
    this.isShiftStart = true;
  }

  addReport(report: Report){
    this.shift.addReport(report);
  }
}
