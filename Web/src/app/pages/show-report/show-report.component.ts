import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-report',
  templateUrl: './show-report.component.html',
  styleUrls: ['./show-report.component.css']
})
export class ShowReportComponent implements OnInit {

  @Input() report;
  constructor() { }

  ngOnInit() {
  }

}
