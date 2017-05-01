import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service'
import { Router } from '@angular/router';
import { TableItem } from '../../models/Table';
import { ReportService } from '../../service/report/report.service';

import { RoleService } from '../../service/role/role.service';


import { LastReportComponent } from './last-report/last-report.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private lastReport:TableItem;
  private hotArea:TableItem;
  private nowActive:TableItem;

  private selectedTitle:string;
  private selectedBody:string;

  constructor(private userService:UserService, 
              private reportService:ReportService,
              private router:Router,
  ) 
  {
    /*if(!this.userService.isLogin())
      this.router.navigate(['login']);*/
    this.lastReport = new TableItem('lastReport',3, [ 'תאריך', 'שעה', 'איזור']);
    this.hotArea = new TableItem('hotArea', 2, ['איזור', 'מספר תקריות']);
    this.nowActive = new TableItem('nowActive', 2, ['איזור', 'דוח תחילת משמרת']);
    this.lastReport.getTypeRows();
    console.log(this.reportService.getLastReport(this.lastReport));
   };

   private lastReportSelected(index){
     var event = this.reportService.lastReportArr[index];
     this.selectedTitle = event.title;
     this.selectedBody = event.title;
     console.log('show');

   }


  ngOnInit() {
  };
}
