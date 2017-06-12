import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report/report.service';
import { UserService } from '../../service/user/user.service'
import { Report } from '../../models/Report';
import { Shift } from '../../models/Shift';
import { FirebaseService } from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  newsData:string[];
  curr:string;
  index:number;
  shiftIndex: number;


  constructor(public userService:UserService, 
              public reportService:ReportService,
              public firebaseService: FirebaseService) { 
    
    this.index = 0;
    this.shiftIndex = 0;
    let event = [];
    this.firebaseService.shiftObsarvable.subscribe(val=>{
      for(let s of val)
        if(this.firebaseService.checkIfShiftBelong(s['$key']))
          event.push(s);
    })
    this.firebaseService.reportObsarvable.subscribe(val=>{
      for(let s of val)
        if(this.firebaseService.checkIfReportBelong(s['$key']))
          event.push(s);
    })
    this.firebaseService.hotObsarvable.subscribe(val=>{
      for(let s of val)
        if(this.firebaseService.checkIfHotBelong(s['$key']))
          event.push(s);
    })
    
    var curr = '';


    setInterval(()=>{
      
      if(event.length != 0){

        this.index %= event.length;
        
        if(event[this.index] != null){
          if(event[this.index] instanceof Shift)
          {
            let d = new Date(event[this.index].startShift.date);
            this.curr = "בתאריך " + d.toLocaleDateString +" בשעה " + d.toLocaleTimeString + "התחילה משמרת";
          }
          else if(event[this.index] instanceof Report)
          {

          }
          // if(event[this.index].date)
          // let d = new Date()
          // this.curr = this.firebaseService.reports[that.index].summary;
        }
        this.index++;
      }
    },3000)
  }

  ngOnInit() {
  }

}
