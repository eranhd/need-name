import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service'
import { Router } from '@angular/router';
import { TableItem } from '../../models/Table';
import { ReportService } from '../../service/report/report.service';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { RoleService } from '../../service/role/role.service';
import { Shift } from '../../models/Shift';


import { LastReportComponent } from './last-report/last-report.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lastReport: TableItem;
  public hotArea: TableItem;
  public nowActive: TableItem;

  public selectedTitle: string;
  public selectedBody: string;

  shifts: Array<Shift>;
  reports: Array<any>;
  shiftShow = 0;

  constructor(public userService: UserService,
              public reportService: ReportService,
              public firebseService: FirebaseService,
              public router: Router
  )
  {

    this.lastReport = new TableItem('lastReport', 3, [ 'תאריך', 'שעה', 'איזור']);
    this.hotArea = new TableItem('hotArea', 2, ['איזור', 'מספר תקריות']);
    this.nowActive = new TableItem('nowActive', 2, ['איזור', 'דוח תחילת משמרת']);
    this.lastReport.getTypeRows();
    // console.log(this.firebseService.reportsId);
    this.firebseService.shiftObsarvable.subscribe(val => {
      const s = [];
      for (const item of val)
        if (this.firebseService.checkIfShiftBelong(item['$key']))
          s.push(item);
      this.shifts = s.slice(0, 10);
      console.log(this.shifts);
    });


    this.firebseService.reportObsarvable.subscribe(val => {
      const r = [];
      for (const item of val)
        if (this.firebseService.checkIfReportBelong(item['$key']))
          r.push(item);
      this.reports = r.slice(0, 10);

    });
   };

   private lastReportSelected(index){
     const event = this.reportService.lastReportArr[index];
     this.selectedTitle = event.summary;
     this.selectedBody = event.summary;
     console.log('show');

   }

   showMore(id: string): boolean{
     if (!this.firebseService.checkIfShiftBelong(id))
     return false;
     if (this.shiftShow == 3)
      return false;
    this.shiftShow++;
    return true;

   }

  ngOnInit() {
  };
}
