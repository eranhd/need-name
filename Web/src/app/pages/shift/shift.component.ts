import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { Observable } from 'rxjs';
import { Shift } from '../../models/Shift';
// import { LocationName } from '../../pipe/locationName.pipe';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  data: Array<Shift>;
  originalData: Array<Shift>;

  numData: string[];
  leadName: string;

  locationName: string;

  fromDate: Date;
  toDate: Date;

  fromReportNum: string = "0";
  toReportNum: string = "0";

  fromHotNum: string = "0";
  toHotNum: string = "0";

  fromColdNum: string = "0";
  toColdNum: string = "0";

  constructor(public firebseService: FirebaseService,
    // private locPipe: LocationName
  ) {
    this.data = [];
    this.numData = [];
    for (let i = 1; i < 20; i++)
      this.numData.push(i + '');
    this.firebseService.shiftObsarvable.subscribe(val => {
      this.originalData = val;
      this.data = this.search(val);
    });
  }

  search(val: Array<Shift>) {
    // console.log( (new Date(this.fromDate)) + ', ' + ( new Date(this.toDate)) + ', =>'  + ((new Date(this.fromDate)) > ( new Date(this.toDate))) ); 
    let shifts = [];
    for (let shift of val) {
      if (this.leadName && this.leadName != '') {
        if (shift.team.lead.replace(/ /g, '') != this.leadName.replace(/ /g, ''))
          continue;
      }
      // if (this.locationName && this.locationName != '')
      //   if (this.locPipe.transform(shift.stratShift.location).replace(/ /g, '') == this.locationName.replace(/ /g, ''))
      //     continue;
      if (this.fromDate)
        if (this.fromDate > shift.stratShift.date)
          continue;
      if (this.toDate)
        if (this.toDate < shift.stratShift.date)
          continue;
      if (this.fromReportNum != '0')
        if (!shift.reportsId || parseInt(this.fromReportNum) > shift.reportsId.length)
          continue;
      if (this.toHotNum != '0')
        if (!shift.reportsId ||  parseInt(this.toReportNum) < shift.reportsId.length)
          continue;
      if (this.fromHotNum != '0')
        if (!shift.hotSpotId || parseInt(this.fromHotNum) > shift.hotSpotId.length)
          continue;
      if (this.toHotNum != '0')
        if (!shift.hotSpotId || parseInt(this.toHotNum) < shift.hotSpotId.length)
          continue;
      if (this.fromColdNum != '0')
        if (!shift.coldSpotId || parseInt(this.fromColdNum) > shift.coldSpotId.length)
          continue;
      if (this.toColdNum != '0')
        if (!shift.coldSpotId || parseInt(this.fromColdNum) < shift.coldSpotId.length)
          continue;


      shifts.push(shift);
    }
    this.data = shifts;
    return shifts;

  }
  ngOnInit() {

  }

}
