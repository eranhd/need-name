import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service'
import { Router } from '@angular/router';
import { TableItem } from '../../models/Table';
import { ReportService } from '../../service/report/report.service';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { RoleService } from '../../service/role/role.service';


import { LastReportComponent } from './last-report/last-report.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lastReport:TableItem;
  public hotArea:TableItem;
  public nowActive:TableItem;

  public selectedTitle:string;
  public selectedBody:string;

  constructor(public userService:UserService, 
              public reportService:ReportService,
              public firebseService: FirebaseService,
              public router:Router
  ) 
  {
    /*if(!this.userService.isLogin())
      this.router.navigate(['login']);*/
    this.lastReport = new TableItem('lastReport',3, [ 'תאריך', 'שעה', 'איזור']);
    this.hotArea = new TableItem('hotArea', 2, ['איזור', 'מספר תקריות']);
    this.nowActive = new TableItem('nowActive', 2, ['איזור', 'דוח תחילת משמרת']);
    this.lastReport.getTypeRows();
    if(!this.firebseService.shifts)
      this.firebseService.initShifts();
   };

   private lastReportSelected(index){
     var event = this.reportService.lastReportArr[index];
     this.selectedTitle = event.summary;
     this.selectedBody = event.summary;
     console.log('show');

   }


  ngOnInit() {
  };
}
