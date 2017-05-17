import { Component, OnInit } from '@angular/core';
import { SettingReportService } from '../../service/setting-report/setting-report.service';
import { AppComponent } from '../../app.component';
import { Report, ReportField } from '../../models/Report';
import { Router } from '@angular/router';
import { Location } from '../../models/Location';
import { UserService } from '../../service/user/user.service';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { ShiftService } from '../../service/shift/shift.service';
import { Team } from '../../models/Team'; 

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  summary: string;
  constructor(public settingReportService:SettingReportService, 
  public appComp:AppComponent,private router:Router,
  public userService: UserService, 
  public firebaseService: FirebaseService,
  public shiftService: ShiftService) {
   }

  public submit(){

    let report:Report;

    this.summary = (<HTMLInputElement>document.getElementById('summary')).value;
    //console.log(summary);

    //new Report(new Date() undefined, title, undefined);

    let filds: ReportField[] = [];
    var items = this.settingReportService.getInputs();
    for(var i = 0; i < items.length; i++){
      if(items[i].id != 'summary')
        filds.push(new ReportField(items[i].label, (<HTMLInputElement>document.getElementById(items[i].id)).value));
        //report.addFiled(undefined, items[i].label, (<HTMLInputElement>document.getElementById(items[i].id)).value);
    }

    

    
     navigator.geolocation.getCurrentPosition((position)=>{
      report = new Report(filds, this.summary, position);
      //*********************need to delete */
      this.shiftService.startShift(new Team());
      this.shiftService.shift.addReport(report);
      this.userService.user.updateLastShift(this.shiftService.shift);
      this.firebaseService.updateUser(this.userService.user);
      //console.log(this.userService.user);

    }, (error)=>{
      alert("אנא הפעל מיקום");
    });
    
    
    
    
       if(window.innerWidth < 800){
        this.router.navigate(['mobile_main']);
      }
    
    
    
  };
  ngOnInit() {
    this.appComp.showNav = false;
  }

}
