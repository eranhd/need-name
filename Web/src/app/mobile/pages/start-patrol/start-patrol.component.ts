import { Component, OnInit, OnChanges, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../../models/Team';

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


  constructor(public router:Router) {
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
  };

  ngOnInit() {
    console.log((<HTMLInputElement>document.getElementById('numOfVolunteers')).value);
    this.numOfMembers = 0;
    this.team.members = [];
  }

  ngOnChanges(item){

  }
}

