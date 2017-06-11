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
        if (!shift.reportsId || parseInt(this.toReportNum) < shift.reportsId.length)
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

  generateCvs() {
    // console.log(this.data);
    let d = this.data;
    let cv = [[]]
    cv.push(["תאריך","שעת התחלה","שעת סיום","ראש צוות","מספר אנשי צוות","מספר אירועים","מספר נקודות קרות","מספר נקודות חמות"])
    for(let shift of d){
      let a = [];
      if(shift.stratShift){
        let d = new Date(shift.stratShift.date)
        a.push(d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear());
        // d = new Date(shift.stratShift.date)
        a.push(d.getHours() + ':' + d.getMinutes());
      }
      else{
        a.push("תאריך לא ידוע");
        a.push("שעה לא ידועה");
      }
      if(shift.endShift)
      {
        let d = new Date(shift.endShift.date)
        a.push(d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear());
      }
      else
        a.push("שעה לא ידועה")
      // a.push(shift.stratShift == null? "תאריך לא ידוע" : );
      // a.push(shift.stratShift == null? "שעה לא יועה" : shift.stratShift.date.toLocaleTimeString);
      // a.push(shift.endShift == null? "תאריך לא ידוע" : shift.endShift.date.toLocaleTimeString);
      a.push(shift.team == null? "לא ידוע" : shift.team.lead);
      a.push(shift.team == null? "לא ידוע" : shift.team.members.length);
      a.push(shift.reportsId == null? "0" : shift.reportsId.length);
      a.push(shift.coldSpotId == null? "0" : shift.coldSpotId.length);
      a.push(shift.hotSpotId == null? "0" : shift.hotSpotId.length);
      cv.push(a);
    }
    
    
    var csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    cv.forEach(function (infoArray, index) {

      let dataString = infoArray.join(",");
      csvContent += index < cv.length ? dataString + "\n" : dataString;
    });
    console.log(csvContent);
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href",encodedUri);
    link.setAttribute("download", "my_data.csv");
    link.setAttribute('style', 'display:block;width:200px;height:200px;font-size:50px;')
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  }
  ngOnInit() {

  }

}
