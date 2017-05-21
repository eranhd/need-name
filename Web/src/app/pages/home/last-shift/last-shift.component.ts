import { Component, OnInit, Input } from '@angular/core';
import { Shift } from '../../../models/Shift';

@Component({
  selector: 'last-shift',
  templateUrl: './last-shift.component.html',
  styleUrls: ['./last-shift.component.css']
})
export class LastShiftComponent implements OnInit {

  @Input() shift: Shift;
  constructor() { }

  ngOnInit() {
  }

}
