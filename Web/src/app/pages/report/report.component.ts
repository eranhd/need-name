import { Component, OnInit } from '@angular/core';
import { SettingReportService } from '../../service/setting-report/setting-report.service';
import { AppComponent } from '../../app.component';

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
    var d = new Date();
    var date = d.getDate() + '_' + (d.getMonth()+1) + '_' + d.getFullYear(); 
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    var obj = {time : time,
      date : date,
      latitude : 0,
      longitude : 0
    };
    var items = this.settingReportService.getInputs();
    for(var i = 0; i < items.length; i++)
      obj[items[i].id] = (<HTMLInputElement>document.getElementById(items[i].id)).value;
   // obj['latitude'] = ""//that.lat;
   // obj['longitude'] = ''//that.lng;
    
    var that = this;
     navigator.geolocation.getCurrentPosition(function(position){
     that.lat = position.coords.latitude;
     that.lng = position.coords.longitude;
     obj.latitude = that.lat;
     obj.longitude = that.lng;
     
    });
    that.settingReportService.save(obj);
    
    
    
  };
  ngOnInit() {
    this.appComp.showNav = false;
  }

}
