import { Injectable } from '@angular/core';
import { Shift } from '../../models/Shift';
import { Team } from '../../models/Team';
import { Report } from '../../models/Report';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Location } from '../../models/Location';

@Injectable()
export class ShiftService {

  shift: Shift;
  id: string;
  isShiftStart: boolean;
  constructor() {
    // if(!LocalStorageService.loadUser())
    //   this.isShiftStart = false;
    // else{
    //   this.isShiftStart = true;
    // }
    if (LocalStorageService.loadShift()){
      this.shift = LocalStorageService.loadShift();
      this.id = LocalStorageService.getId();
      this.isShiftStart = true;
    }
   }

  startShift(location: Location, team: Team){
    this.shift = new Shift(location, team);
    this.isShiftStart = true;
  }

  addReport(report: Report, id: string){
    this.shift.addReport(report, 1, id);
    LocalStorageService.saveShift(this.shift, this.id);
  }


  addColdSpot(id: string){
    this.shift.addColdSpot(id);
    LocalStorageService.saveShift(this.shift, this.id);
  }

  addHotSpot(id: string){
    this.shift.addHotSpot(id);
    LocalStorageService.saveShift(this.shift, this.id);
  }
}
