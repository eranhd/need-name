import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../../models/Team';
import { ShiftService } from '../../../service/shift/shift.service';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { UserService } from '../../../service/user/user.service';
import { Shift } from '../../../models/Shift';

@Component({
  selector: 'app-end-patrol',
  templateUrl: './end-patrol.component.html',
  styleUrls: ['./end-patrol.component.css']
})
export class EndPatrolComponent implements OnInit {

  filling: string;

  constructor(public router: Router,
    public shiftService: ShiftService,
    public fireService: FirebaseService,
    public userService: UserService,
    public firebaseService: FirebaseService ) {

    this.filling = '';
  }

  public endThisShift(filling: string) {
    this.shiftService.shift.initEndShift(filling);
    this.shiftService.isShiftStart = false;
    this.userService.user.updateLastShift(this.shiftService.shift);
    this.firebaseService.updateUser(this.userService.user);
  }
  ngOnInit() {
  }

}
