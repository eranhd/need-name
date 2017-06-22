import { Component, OnInit, OnChanges, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { Team } from "../../../models/Team";
import { ShiftService } from "../../../service/shift/shift.service";
import { FirebaseService } from "../../../service/firebase/firebase.service";
import { UserService } from "../../../service/user/user.service";
import { Shift } from "../../../models/Shift";
import { LocalStorageService } from "../../../service/local-storage/local-storage.service";
import { Location } from "../../../models/Location";
import { SaveLocationBetaComponent } from "../save-location-beta/save-location-beta.component";
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfirmationDialog } from '../../../dialog/confirm-dialog';


@Component({
  selector: "app-start-patrol",
  templateUrl: "./start-patrol.component.html",
  styleUrls: ["./start-patrol.component.css"]
})
export class StartPatrolComponent implements OnInit, OnChanges {

  public leader: string;
  public numOfMembers: number;
  public isValid: boolean;
  public memberValid: boolean;
  team: Team;
  location: Location;
  isSubmit = false;
  dialogRef: MdDialogRef<ConfirmationDialog>;

  constructor(public router: Router,
              public dialog: MdDialog,
              public shiftService: ShiftService,
              public fireService: FirebaseService,
              public userService: UserService) {
    this.numOfMembers = null;
    this.team = new Team();
    this.isValid = true;
    this.memberValid = false;
    this.location = null;
    
  }

   deleteMember(){

  };


  public startPatrol() {
    
    this.isSubmit = true;
    if (this.numOfMembers <= 0 || this.team.teamNum <= 0 || !this.team.teamNum || this.team.lead == null || !this.team.lead){
      this.isValid = false;

      this.isSubmit = false;
    }
    else{
        for (let i = 0 ; i < this.team.members.length; i++){
          if (this.team.members[i].name == null){
            this.isValid = false;
            this.memberValid = false;
            this.isSubmit = false;
            break;
          }
          else{
            this.memberValid = true;
          }
        }
    }
    if (this.memberValid == true){
        navigator.geolocation.getCurrentPosition((position) => {
        this.location = new Location(position.coords.longitude, position.coords.latitude);
        this.shiftService.startShift(this.location, this.team);
        this.fireService.saveShift();
      }, (error) => {
          this.isSubmit = false;
            console.log("position start shift error" + error.message);
        });

        this.isValid = true;
        this.openConfirmationDialog();
        this.router.navigate(["mobile_main"]);
      }
  };

  ngOnInit() {
    console.log((<HTMLInputElement>document.getElementById("numOfVolunteers")).value);
    this.numOfMembers = null;
    this.team.members = [];
  }

  ngOnChanges(item){

  }

  openConfirmationDialog() {
    this.dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "הסיור החל";
    this.dialogRef.componentInstance.body = "סיור מוצלח";

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions
      }
      this.dialogRef = null;
    });
  }
}

