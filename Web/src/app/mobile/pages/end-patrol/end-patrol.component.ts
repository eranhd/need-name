import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../../models/Team';
import { ShiftService } from '../../../service/shift/shift.service';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { UserService } from '../../../service/user/user.service';
import { Shift } from '../../../models/Shift';
import { Location } from '../../../models/Location';

@Component({
  selector: 'app-end-patrol',
  templateUrl: './end-patrol.component.html',
  styleUrls: ['./end-patrol.component.css']
})
export class EndPatrolComponent implements OnInit {

  filling: string;
  summaryT:string;

  constructor(public router: Router,
    public shiftService: ShiftService,
    public fireService: FirebaseService,
    public userService: UserService) {

    this.filling = null;
    this.summaryT='';
  }


  public endThisShift(filling: string) {
    console.log(this.summaryT);
    this.shiftService.shift.initEndShift(filling);
    this.shiftService.shift.endShift.summary=this.summaryT;
    this.shiftService.isShiftStart = false;
    
     navigator.geolocation.getCurrentPosition((position) => {
            this.shiftService.shift.endShift.location = new Location(position.coords.longitude, position.coords.latitude);
        }, (error) => {
            console.log('position start shift error' + error.message);
        });

        alert(this.shiftService.shift.endShift.location);
    this.userService.user.updateLastShift(this.shiftService.shift);
    this.fireService.updateUser(this.userService.user);
    this.router.navigate(['mobile_main']);
  }
  ngOnInit() {
  }

}
