import { Component, OnInit } from '@angular/core';
import { SettingReportService } from '../../service/setting-report/setting-report.service';
@Component({
  selector: 'app-setting-report',
  templateUrl: './setting-report.component.html',
  styleUrls: ['./setting-report.component.scss']
})
export class SettingReportComponent implements OnInit {

  label: string;
  placeHolder: string;            
  type: string;
  isValid: boolean;
  placeHolderId:string; //this is what you want delet

  constructor(public settingReportService:SettingReportService,
            ) {
              this.isValid = false;
              this.placeHolderId='';
   };

   public addToInputItem(){
     console.log(this.generateId() + ' ' +  this.type + ' ' + this.label + ' '+  this.placeHolder);
     if( !this.label || !this.type || !this.placeHolder || this.label == '' || this.type == '' || this.placeHolder == '')
      return;
    this.settingReportService.addInputItem(this.generateId(), this.type, this.label, this.placeHolder);
    this.cleanInput();
   };

   generateId(): string{
    let str = '';
    let d = new Date();
    str = d.getTime + '-' + this.label + '_' + this.type;
    return str;
   }

   public cleanInput(){
    this.label = '';
    this.placeHolder = '';
    this.type = '';

   };

   public deleteField(){
     console.log(this.placeHolderId);
     this.settingReportService.deleteField(this.placeHolderId);
   }

  ngOnInit() {
  }

}
