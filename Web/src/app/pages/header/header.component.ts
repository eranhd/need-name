import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report/report.service';
import { UserService } from '../../service/user/user.service'
import {Report } from '../../models/Report';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  newsData:string[];
  curr:string;
  index:number;


  constructor(private userService:UserService, 
              private reportService:ReportService) { 
    
    this.index = 0;
    var that = this;
    var currArr:Report[] = that.reportService.getLastReportArr();
   // console.log(currArr);
    var curr = '';

    setInterval(function(){
      if( that.reportService.getLastReportArr().length != 0 ){
        currArr = that.reportService.getLastReportArr();
        //console.log(currArr);
        that.index++;
        that.index %= currArr.length;
        //console.log(that.reportService.getLastReportArr(that.index));
        that.curr = currArr[that.index].title;
      }
    },3000)
  }

  ngOnInit() {
  }

}
