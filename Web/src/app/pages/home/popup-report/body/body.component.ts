import { Component, OnInit, Input } from '@angular/core';
import { ReportField } from '../../../../models/Report';

@Component({
  selector: 'popup-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() fields:ReportField[];

  constructor() {
    console.log(this.fields);
   }

  ngOnInit() {
  }

}
