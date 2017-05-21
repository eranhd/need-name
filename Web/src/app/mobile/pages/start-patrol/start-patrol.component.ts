import { Component, OnInit, OnChanges, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../../models/Team';
import { ShiftService } from '../../../service/shift/shift.service';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { UserService } from '../../../service/user/user.service';
import { Shift } from '../../../models/Shift';


@Component({
  selector: 'app-start-patrol',
  templateUrl: './start-patrol.component.html',
  styleUrls: ['./start-patrol.component.css']
})
export class StartPatrolComponent implements OnInit, OnChanges {

  public leader:string;
  public numOfMembers:number;
  public isValid: boolean;
  public memberValid: boolean;
  team: Team;


  constructor(public router:Router,
              public shiftService: ShiftService,
              public fireService: FirebaseService,
              public userService: UserService) {
    this.numOfMembers=null;
    this.team = new Team();
    this.isValid = true;
    this.memberValid=false;
  }

   deleteMember(){

  };


  private startPatrol() {
    if(this.numOfMembers <= 0 || this.team.teamNum <= 0 || !this.team.teamNum || this.team.lead == null || !this.team.lead){
      this.isValid = false;
      console.log("is ins the if 1");
    }
    else{
        for(let i=0 ; i<this.team.members.length;i++){
          if(this.team.members[i].name == null){
            this.isValid=false;
            this.memberValid=false;
            break;
          }
          else{
            this.memberValid=true;
          }
        }
    }
    if(this.memberValid == true){
        this.isValid = true;
        this.shiftService.startShift(this.team);
        this.userService.user.addShift(this.shiftService.shift);
        this.fireService.updateUser(this.userService.user);
        this.router.navigate(['mobile_main']);
      }
  };

  ngOnInit() {
    console.log((<HTMLInputElement>document.getElementById('numOfVolunteers')).value);
    this.numOfMembers = 0;
    this.team.members = [];
  }

  ngOnChanges(item){

  }
}

