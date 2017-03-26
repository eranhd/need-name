import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service'
import { Router } from '@angular/router';
import { TableItem } from '../items/Table';
import { ReportService } from '../service/report/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private lastReport:TableItem;
  private hotArea:TableItem;
  private nowActive:TableItem;

  constructor(private userService:UserService, 
  private router:Router
  ) {
    if(!this.userService.isLogin())
      this.router.navigate(['login']);
    this.lastReport = new TableItem('lastReport',3, [ 'תאריך', 'שעה', 'צוות']);
    this.hotArea = new TableItem('hotArea', 2, ['איזור', 'מספר תקריות']);
    this.nowActive = new TableItem('nowActive', 2, ['איזור', 'דוח תחילת משמרת']);
   };


  ngOnInit() {
  };

}
