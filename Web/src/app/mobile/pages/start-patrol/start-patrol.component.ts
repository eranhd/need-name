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
  //arry of volunteers name
 // public numOfVolunteers:number;

  constructor(public router:Router) {
    this.numOfMembers=0;
    this.team = new Team();
   // this.teamMember=[];
  }


 // public addVolunteers(){
 //   this.numOfMembers = parseInt((<HTMLInputElement>document.getElementById('numOfVolunteers')).value);
   // console.log(this.numOfMembers);
   // var newMember ='<button type="button" class="btn-deleteMember btn-danger" (click)="deleteMember()"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button><input _ngcontent-c1 type="text" class="volunteerName" id="volunteerName'+this.numOfMembers+'" placeholder="'+this.numOfMembers+' מתנדב"><br>';
   // document.getElementById('volunteers').innerHTML += newMember;
  //    for(var i = 0; i < this.numOfMembers-1; i++){
   //       var newMember ='<input _ngcontent-c1 type="text" class="form-group" id="volunteerName'+(i+2)+'" placeholder="'+(i+2)+' מתנדב"><br>';
    //       document.getElementById('volunteers').innerHTML += newMember;
     //}
   // };
   
  private deleteMember(){

  };



  private startPatrol(){
   //  for(var i = 0; i < this.numOfMembers; i++){

   //  }
    console.log(this.team)
  };

  ngOnInit() {
    console.log((<HTMLInputElement>document.getElementById('numOfVolunteers')).value);
    this.numOfMembers = 0;
    this.team.members = [];
  }

  ngOnChanges(item){
  //  console.log(item);
    // if(item){

    // }
  }
}

