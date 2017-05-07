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


  constructor(public userService:UserService, 
              public reportService:ReportService) { 
    
    this.index = 0;
    var that = this;
    var currArr:Report[] = that.reportService.getLastReportArr();
    var curr = '';

    setInterval(function(){
      if( that.reportService.getLastReportArr().length != 0 ){
        currArr = that.reportService.getLastReportArr();
        
        that.index++;
        that.index %= currArr.length;
        
        if(currArr[that.index] != null)
          if(currArr[that.index].title)
            that.curr = currArr[that.index].title;
      }
    },3000)
  }

  ngOnInit() {
  }

}
