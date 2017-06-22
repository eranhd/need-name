import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Team } from "../../../models/Team";
import { ShiftService } from "../../../service/shift/shift.service";
import { FirebaseService } from "../../../service/firebase/firebase.service";
import { UserService } from "../../../service/user/user.service";
import { Shift } from "../../../models/Shift";
import { Location } from "../../../models/Location";
import { LocalStorageService } from "../../../service/local-storage/local-storage.service";
import { ConfirmationDialog } from '../../../dialog/confirm-dialog';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: "app-end-patrol",
  templateUrl: "./end-patrol.component.html",
  styleUrls: ["./end-patrol.component.css"]
})
export class EndPatrolComponent implements OnInit {

  filling: string;
  summaryT: string;
  unusualEvents: string;
  dilemmas: string;
  dialogRef: MdDialogRef<ConfirmationDialog>;

  constructor(public router: Router,
    public shiftService: ShiftService,
    public fireService: FirebaseService,
    public userService: UserService,
    public dialog: MdDialog,) {

    this.filling = "";
    this.summaryT = "";
    this.dilemmas = "";
    this.unusualEvents = "";
  }


  public endThisShift(filling: string, summaryT: string, dilemmas: string, unusualEvents: string) {

    LocalStorageService.clearUser();
    navigator.geolocation.getCurrentPosition((position) => {
      this.shiftService.shift.initEndShift(filling, summaryT, dilemmas, unusualEvents, position);
      this.shiftService.isShiftStart = false;
      LocalStorageService.clearUser();
      this.fireService.updateShift();
      LocalStorageService.clearShift();
      this.openConfirmationDialog(filling);
      this.router.navigate(["mobile_main"]);
    }, (error) => {
      alert("אנא הפעל מיקום");
    });

  }

  openConfirmationDialog(filling) {
    this.dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "הסיור נגמר";
    switch(filling){
      case "סבבה":
        this.dialogRef.componentInstance.body = "מקווים שסיור הבא יימשך במגמה חיובית זו";
        break;
      case "מצויין":
        this.dialogRef.componentInstance.body = "אנו שמחים שהסיור עבר בצורה טובה. ";
        break;
      case "גרוע":
        this.dialogRef.componentInstance.body = "הפירוט שמולא יטופל בהתאם. ";
        break;
      case "לא משהו":
        this.dialogRef.componentInstance.body = "אנו מקווים שסיור הבא יהיה מוצלח יותר ";
        break;
    }
    this.dialogRef.componentInstance.body += "שיהיה המשך ערב טוב";

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions
      }
      this.dialogRef = null;
    });
  }

  ngOnInit() {
  }

}
