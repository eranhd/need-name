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
  public isValid: boolean;
  public memberValid: boolean;
  team: Team;


  constructor(public router:Router,
              public shiftService: ShiftService,
              public fireService: FirebaseService,
              public userService: UserService) {
    this.numOfMembers=0;
    this.team = new Team();
    this.isValid = true;
    this.memberValid=true;
  }

   deleteMember(){

  };


  private startPatrol() {
    if(this.numOfMembers <= 0 || this.team.teamNum <= 0 || !this.team.teamNum || this.team.lead == '' || !this.team.lead)
      this.isValid = false;
    else{
        for(let i=0 ; i<this.team.members.length;i++){
          if(this.team.members[i].name == ''){
            this.isValid=false;
            this.memberValid=false;
            break;
          }
        }
    }
    if(this.memberValid){
        this.isValid = true;
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

