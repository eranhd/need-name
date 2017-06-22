import { Component, OnInit, Input } from "@angular/core";
import { FirebaseService } from "../../service/firebase/firebase.service";
import { Observable } from "rxjs";
import { Shift } from "../../models/Shift";
import { LocationName } from "../../pipe/locationName.pipe";

@Component({
  selector: "app-shift",
  templateUrl: "./shift.component.html",
  styleUrls: ["./shift.component.scss"]
})
export class ShiftComponent implements OnInit {

  numToShow = 7;
  indexToShow = 0;

  data: Array<Shift>;
  originalData: Array<Shift>;

  numData: string[];
  leadName: string;

  locationName: string;

  fromDate: Date;
  toDate: Date;

  fromReportNum = "0";
  toReportNum = "0";

  fromHotNum = "0";
  toHotNum = "0";

  fromColdNum = "0";
  toColdNum = "0";

  constructor(public firebseService: FirebaseService,
    private locPipe: LocationName
  ) {
    this.data = [];
    this.numData = [];
    for (let i = 1; i < 20; i++)
      this.numData.push(i + "");
    this.firebseService.shiftObsarvable.subscribe(val => {
      const arr = [];
      for (const item of val)
        if (this.firebseService.checkIfShiftBelong(item["$key"])) {
          arr.push(item);
        }
        this.originalData = arr;
        this.data = this.search(arr);
    });
  }

  search(val: Array<Shift>) {
    const shifts = [];
    for (const shift of val) {
      if (this.leadName && this.leadName != "") {
        if (!shift.team.lead.replace(/ /g, "").includes(this.leadName.replace(/ /g, "")))
          continue;
      }
      if (this.locationName && this.locationName != "")
        if (!this.locPipe.transform(shift.stratShift.location).replace(/ /g, "").includes(this.locationName.replace(/ /g, "")))
          continue;
      if (this.fromDate)
        if (this.fromDate > shift.stratShift.date)
          continue;
      if (this.toDate)
        if (this.toDate < shift.stratShift.date)
          continue;
      if (this.fromReportNum != "0")
        if (!shift.reportsId || parseInt(this.fromReportNum) > shift.reportsId.length)
          continue;
      if (this.toHotNum != "0")
        if (!shift.reportsId || parseInt(this.toReportNum) < shift.reportsId.length)
          continue;
      if (this.fromHotNum != "0")
        if (!shift.hotSpotId || parseInt(this.fromHotNum) > shift.hotSpotId.length)
          continue;
      if (this.toHotNum != "0")
        if (!shift.hotSpotId || parseInt(this.toHotNum) < shift.hotSpotId.length)
          continue;
      if (this.fromColdNum != "0")
        if (!shift.coldSpotId || parseInt(this.fromColdNum) > shift.coldSpotId.length)
          continue;
      if (this.toColdNum != "0")
        if (!shift.coldSpotId || parseInt(this.fromColdNum) < shift.coldSpotId.length)
          continue;


      shifts.push(shift);
    }
    this.data = shifts.slice(this.indexToShow, this.indexToShow + this.numToShow);
    return shifts.slice(this.indexToShow, this.indexToShow + this.numToShow);

  }

  generateCvs() {
    // console.log(this.data);
    const d = this.data;
    const cv = [[]]
    cv.push(["תאריך", "מיקום", "שעת התחלה", "שעת סיום", "ראש צוות", "מספר אנשי צוות", "מספר אירועים", "מספר נקודות קרות", "מספר נקודות חמות"])
    for (const shift of d) {
      const a = [];
      if (shift.stratShift) {
        const d = new Date(shift.stratShift.date)
        a.push(d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear());
        // d = new Date(shift.stratShift.date)
        a.push(this.locPipe.transform(shift.stratShift.location));
        a.push(d.getHours() + ":" + d.getMinutes());
      }
      else {
        a.push("תאריך לא ידוע");
        a.push("מיקום לא ידוע")
        a.push("שעה לא ידועה");
      }
      if (shift.endShift) {
        const d = new Date(shift.endShift.date)
        a.push(d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear());
      }
      else
        a.push("שעה לא ידועה")
      a.push(shift.team == null ? "לא ידוע" : shift.team.lead);
      a.push(shift.team == null ? "לא ידוע" : shift.team.members.length);
      a.push(shift.reportsId == null ? "0" : shift.reportsId.length);
      a.push(shift.coldSpotId == null ? "0" : shift.coldSpotId.length);
      a.push(shift.hotSpotId == null ? "0" : shift.hotSpotId.length);
      cv.push(a);
    }


    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    cv.forEach(function (infoArray, index) {

      const dataString = infoArray.join(",");
      csvContent += index < cv.length ? dataString + "\n" : dataString;
    });
    console.log(csvContent);
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    link.setAttribute("style", "display:block;width:200px;height:200px;font-size:50px;")
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  }

  showNext() {
    // console.log(this.indexToShow)
    if (this.indexToShow >= this.originalData.length)
      return;
    this.indexToShow += this.numToShow;
    this.search(this.originalData);

  }
  remove(type: string, id: string){
    let ans = confirm("מחיקה אינה מאפשרת שחזור של המשמרת האם למחוק?");
    if(ans)
      this.firebseService.removeData(type, id)
    else
      return;
  }
  showPrev() {
    // console.log(this.indexToShow);
    if (this.indexToShow <= 0)
      return;
    this.indexToShow -= this.numToShow
    this.search(this.originalData);
  }
  ngOnInit() {

  }

}
