import { Component, OnInit } from '@angular/core';
import { SettingReportService } from '../service/setting-report/setting-report.service';
@Component({
  selector: 'app-setting-report',
  templateUrl: './setting-report.component.html',
  styleUrls: ['./setting-report.component.css']
})
export class SettingReportComponent implements OnInit {

  constructor(private settingReportService:SettingReportService) {
    
    //settingReportService.addInputItem('a','a','a','a');
   };

   public addToInputItem(){
    var label:string = (<HTMLInputElement>document.getElementById('fieldName')).value;
    var placeHolder:string = (<HTMLInputElement>document.getElementById('fieldDescription')).value;
    var id:string = (<HTMLInputElement>document.getElementById('fieldDescriptionInEnglish')).value;
    var type:string = (<HTMLInputElement>document.getElementById('selectedType')).value;
    this.settingReportService.addInputItem(id, label, placeHolder, type);


   };

  ngOnInit() {
  }

}
