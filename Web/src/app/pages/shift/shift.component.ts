import { Component, OnInit, Input } from '@angular/core';
import { Shift } from '../../models/Shift';
import { FirebaseService } from '../../service/firebase/firebase.service';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  @Input() shift: Shift;
  constructor(public firebseService: FirebaseService) { }

  ngOnInit() {
  }

}
