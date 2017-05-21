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
  public isValid: boolean;
  team: Team;


  constructor(public router:Router,
              public shiftService: ShiftService,
              public fireService: FirebaseService,
              public userService: UserService) {
    this.numOfMembers=0;
    this.team = new Team();
    this.isValid = false;

  }

   deleteMember(){

  };


  private startPatrol() {
    if(this.numOfMembers <= 0 || this.team.teamNum <= 0 || !this.team.teamNum || this.team.lead == '' || !this.team.lead)
      this.isValid = false;
    else{
      this.isValid = true;
      this.router.navigate(['mobile_main']);
    }
    //let error:string = "<div class='alert alert-danger' role='alert'> <strong> .נא למלא את השדות</strong></div>";
   // if( (<HTMLInputElement>document.getElementById('teamNumber')).value == "" || (<HTMLInputElement>document.getElementById('numOfVolunteers')).value == "" || (<HTMLInputElement>document.getElementById('teamLeader')).value == ""){
    //document.getElementById("error").innerHTML = error;
      //alert("ffff");
      

  };

  ngOnInit() {
    console.log((<HTMLInputElement>document.getElementById('numOfVolunteers')).value);
    this.numOfMembers = 0;
    this.team.members = [];
  }

  ngOnChanges(item){

  }
}

