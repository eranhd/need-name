import { Component, OnInit } from '@angular/core';
import { SettingReportService } from '../../service/setting-report/setting-report.service';
import { AppComponent } from '../../app.component';
import { Report } from '../../models/Report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private lat:number;
  private lng:number;

  constructor(private settingReportService:SettingReportService, 
  private appComp:AppComponent) {
    this.lat = 0;
    this.lng = 0;
   }

  public submit(){

    var report:Report;

    var title = (<HTMLInputElement>document.getElementById('title')).value;

    report = new Report(new Date(), undefined, title, undefined);

    var items = this.settingReportService.getInputs();
    for(var i = 0; i < items.length; i++){
      if(items[i].id != 'title')
        report.addFiled(undefined, items[i].label, (<HTMLInputElement>document.getElementById(items[i].id)).value);
    }
    
    var that = this;
     navigator.geolocation.getCurrentPosition(function(position){
     that.lat = position.coords.latitude;
     that.lng = position.coords.longitude;
     
    });

    
    console.log(report);
    that.settingReportService.save(report);
    
    
    
  };
  ngOnInit() {
    this.appComp.showNav = false;
  }

}
