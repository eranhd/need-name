import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report/report.service';
import { UserService } from '../../service/user/user.service'
import {Report } from '../../models/Report';
import { FirebaseService } from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
    var that = this;
    let shiftArr = this.firebaseService.shifts;
    var currArr = [];
    
    var curr = '';

    setInterval(()=>{
      
      if( that.reportService.getLastReportArr().length != 0 ){
        
        if(this.index == shiftArr[this.shiftIndex].reports.length){
          this.index = 0;
          this.shiftIndex++;
          currArr = shiftArr[this.shiftIndex].reports;
        }
        if(this.shiftIndex == shiftArr.length){
          this.shiftIndex = 0;
        }

        
        
        this.index %= currArr.length;
        
        if(currArr[that.index] != null)
          if(currArr[that.index].summary)
            that.curr = currArr[that.index].summary;
      }
    },3000)
  }

  ngOnInit() {
  }

}
