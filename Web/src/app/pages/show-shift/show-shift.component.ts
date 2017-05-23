import { Component, OnInit, Input } from '@angular/core';
import { Shift } from '../../models/Shift';


@Component({
  selector: 'app-show-shift',
  templateUrl: './show-shift.component.html',
  styleUrls: ['./show-shift.component.css']
})
export class ShowShiftComponent implements OnInit {

  @Input() shift: Shift;
  constructor() { }

  ngOnInit() {
  }

}
