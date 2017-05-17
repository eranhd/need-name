import { Component, OnInit, OnChanges, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../../models/Team';
import { ShiftService } from '../../../service/shift/shift.service';

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
              public shiftService: ShiftService) {
    this.numOfMembers=0;
    this.team = new Team();

  }

  private deleteMember(){

  };



  private startPatrol(){
    for(let i =0 ; i< this.team.members.length ; i++){
      if(this.team.members[i].name == null){
        console.log("nunu is index"+i+"")
      }
    }

    this.team = new Team();
    this.shiftService.startShift(this.team);
  };

  ngOnInit() {
    console.log((<HTMLInputElement>document.getElementById('numOfVolunteers')).value);
    this.numOfMembers = 0;
    this.team.members = [];
  }

  ngOnChanges(item){

  }
}

