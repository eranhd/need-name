import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../service/firebase/firebase.service';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

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

  constructor(public firebseService: FirebaseService) { 
    this.numData = [];
    for(let i = 1; i < 20; i++)
      this.numData.push(i+'');
  }

  search(){
    console.log(this.fromReportNum)
  }
  ngOnInit() {
    
  }

}
