import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../../models/Team';
import { ShiftService } from '../../../service/shift/shift.service';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { UserService } from '../../../service/user/user.service';
import { Shift } from '../../../models/Shift';
import { Location } from '../../../models/Location';
import { LocalStorageService } from '../../../service/local-storage/local-storage.service';

@Component({
  selector: 'app-end-patrol',
  templateUrl: './end-patrol.component.html',
  styleUrls: ['./end-patrol.component.css']
})
export class EndPatrolComponent implements OnInit {

  filling: string;
  summaryT: string;
  unusualEvents: string;
  dilemmas: string;

  constructor(public router: Router,
    public shiftService: ShiftService,
    public fireService: FirebaseService,
    public userService: UserService) {

    this.filling = '';
    this.summaryT = '';
    this.dilemmas = '';
    this.unusualEvents = '';
  }


  public endThisShift(filling: string, summaryT: string, dilemmas: string, unusualEvents: string) {

    LocalStorageService.clearUser();
    navigator.geolocation.getCurrentPosition((position) => {
      this.shiftService.shift.initEndShift(filling, summaryT, dilemmas, unusualEvents, position);
      this.shiftService.isShiftStart = false;
      LocalStorageService.clearUser();
      this.fireService.updateShift();
      LocalStorageService.clearShift();

      this.router.navigate(['mobile_main']);
    }, (error) => {
      alert('אנא הפעל מיקום');
    });

  }
  ngOnInit() {
  }

}
