import { Component, OnInit } from "@angular/core";
import { UserService } from "../../service/user/user.service"
import { Router } from "@angular/router";
import { TableItem } from "../../models/Table";
import { ReportService } from "../../service/report/report.service";
import { FirebaseService } from "../../service/firebase/firebase.service";
import { RoleService } from "../../service/role/role.service";
import { Shift } from "../../models/Shift";
import { Observable } from 'rxjs';

import { LastReportComponent } from "./last-report/last-report.component";
import { SpinnerComponent } from '../spinner/spinner.component';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public lastReport: TableItem;
  public hotArea: TableItem;
  public nowActive: TableItem;

  public selectedTitle: string;
  public selectedBody: string;

  showReports: Observable<boolean>;
  showShifts: Observable<boolean>;

  _shifts: Array<Shift>;
  _reports: Array<any>;
  shiftShow = 0;

  constructor(public userService: UserService,
    public reportService: ReportService,
    public firebseService: FirebaseService,
    public router: Router
  ) {

    this.showReports = new Observable(ob => {
      ob.next(false);
      ob.complete();
    });
    this.showShifts = new Observable(ob => {
      ob.next(false);
      ob.complete();
    });

  };

  get shifts() {
    this._shifts = [];
    
    const s = [];
    for (const item of this.firebseService.shifts)
      if (this.firebseService.checkIfShiftBelong(item["$key"]))
        s.push(item);
    this._shifts = s.slice(0, 10);
    this.showShifts = new Observable(ob => {
      ob.next(true);
      ob.complete();
    });
   
    return this._shifts;
  }

  get reports() {
    this._reports = [];   
    for (const item of this.firebseService.reports)
      if (this.firebseService.checkIfReportBelong(item["$key"]))
        this._reports.push(item);
    
    for (const item of this.firebseService.hotSpots)
      if (this.firebseService.checkIfHotBelong(item['$key']))
        this._reports.push(item);
    this._reports = this._reports.slice(0, 10);
    this.showReports = new Observable(ob => {
      ob.next(true);
      ob.complete();
    });
    
    return this._reports;
  }

  ngOnInit() {
  };
}
