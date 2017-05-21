import { Component, OnInit, OnChanges, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../../models/Team';
import { ShiftService } from '../../../service/shift/shift.service';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-start-patrol',
  templateUrl: './start-patrol.component.html',
  styleUrls: ['./start-patrol.component.css']
})
export class StartPatrolComponent implements OnInit, OnChanges {

  public leader:string;
  public numOfMembers:number;
  public teamMember:string[]; 
  team: Team;


  constructor(public router:Router,
              public shiftService: ShiftService,
              public fireService: FirebaseService,
              public userService: UserService) {
    this.numOfMembers=0;
    this.team = new Team();

  }

   deleteMember(){

  };



   startPatrol(){
    for(let i =0 ; i< this.team.members.length ; i++){
      if(this.team.members[i].name == null){
        console.log("nunu is index"+i+"")
      }
    }

    this.shiftService.startShift(this.team);
    this.userService.user.addShift(this.shiftService.shift);
    this.fireService.updateUser(this.userService.user);
  };

  ngOnInit() {
    console.log((<HTMLInputElement>document.getElementById('numOfVolunteers')).value);
    this.numOfMembers = 0;
    this.team.members = [];
  }

  ngOnChanges(item){

  }
}

