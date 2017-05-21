import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../service/user/user.service';
import { ShiftService } from '../../../../service/shift/shift.service';

@Component({
  selector: 'app-team-statistics',
  templateUrl: './team-statistics.component.html',
  styleUrls: ['./team-statistics.component.css']
})
export class TeamStatisticsComponent implements OnInit {


  constructor(public userService: UserService,
              public shift: ShiftService) {
    
   }

  ngOnInit() {
  }

}
