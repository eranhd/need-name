import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../../../models/Report';


@Component({
  selector: 'app-last-report',
  templateUrl: './last-report.component.html',
  styleUrls: ['./last-report.component.css']
})
export class LastReportComponent implements OnInit {

  @Input() report:Report;
  private showPopup:boolean;
  constructor() { 
    this.showPopup = false;
  }

  private setPopup(){
    this.showPopup = !this.showPopup;
  }

  ngOnInit() {
  }

}
