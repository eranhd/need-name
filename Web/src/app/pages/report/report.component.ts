import { Component, OnInit } from '@angular/core';
import { SettingReportService } from '../../service/setting-report/setting-report.service';
import { AppComponent } from '../../app.component';
import { Report } from '../../models/Report';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private lat:number;
  private lng:number;

  constructor(public settingReportService:SettingReportService, 
  public appComp:AppComponent,private router:Router) {
    this.lat = 0;
    this.lng = 0;
   }

  public submit(){

    var report:Report;

    var title = (<HTMLInputElement>document.getElementById('summary')).value;
    console.log(title);
    report = new Report(new Date(), undefined, title, undefined);

    var items = this.settingReportService.getInputs();
    for(var i = 0; i < items.length; i++){
      if(items[i].id != 'summary')
        report.addFiled(undefined, items[i].label, (<HTMLInputElement>document.getElementById(items[i].id)).value);
    }
    
    

    
     navigator.geolocation.getCurrentPosition((position)=>{
     this.lat = position.coords.latitude;
     this.lng = position.coords.longitude;
     report.setLocation(this.lng, this.lat);
     this.settingReportService.save(report);
     console.log(report);
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
