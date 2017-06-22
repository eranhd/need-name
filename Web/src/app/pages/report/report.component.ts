import { Component, OnInit, ElementRef } from "@angular/core";
import { SettingReportService } from "../../service/setting-report/setting-report.service";
import { Report, ReportField } from "../../models/Report";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "../../models/Location";
import { UserService } from "../../service/user/user.service";
import { FirebaseService } from "../../service/firebase/firebase.service";
import { ShiftService } from "../../service/shift/shift.service";
import { Team } from "../../models/Team";
import { LocalStorageService } from "../../service/local-storage/local-storage.service";
import { SaveLocationBetaComponent } from "../../mobile/pages/save-location-beta/save-location-beta.component";
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfirmationDialog } from '../../dialog/confirm-dialog';


@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {

  sub: any;
  id: number;
  // date:Date;
  summary: string;
  photoUrl: string;
  isSubmit = false;
  dialogRef: MdDialogRef<ConfirmationDialog>;

  constructor(public settingReportService: SettingReportService,
    private router: Router,
    public activedRouter: ActivatedRoute,
    public userService: UserService,
    public firebaseService: FirebaseService,
    public shiftService: ShiftService,
    public dialog: MdDialog,
    private element: ElementRef) {

    this.sub = this.activedRouter.params.subscribe(params => {
      this.id = params["id"];
    });
  }

  openConfirmationDialog() {
    this.dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false
    });
    if(this.id+"" == "2")
      this.dialogRef.componentInstance.confirmMessage = "נקודה חמה דווחה";
    else
      this.dialogRef.componentInstance.confirmMessage = "דוח נוסף";
    this.dialogRef.componentInstance.body = "תודה";

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions
      }
      this.dialogRef = null;
    });
  }

  public submit() {
    this.isSubmit = true;

    let report: Report;

    // ערן מה עשית פה????? :)
    if ((<HTMLInputElement>document.getElementById("summary")) != null) {
      this.summary = (<HTMLInputElement>document.getElementById("summary")).value;
    }
    const filds: ReportField[] = [];
    const items = this.settingReportService.getInputs();
    for (let i = 0; i < items.length; i++) {//add all fileds to array
      if (items[i].id != "summary")
        filds.push(new ReportField(items[i].label, (<HTMLInputElement>document.getElementById(items[i].id)).value));
    }

    navigator.geolocation.getCurrentPosition((position) => {

      report = new Report(filds, this.summary, position, this.photoUrl); //create new report

      this.firebaseService.saveReport(report, this.id + "");
      LocalStorageService.saveUser(this.userService.user);
      this.openConfirmationDialog();
      this.router.navigate(["mobile_main"]);
    },
      (error) => {
        this.isSubmit = false;
        alert("אנא הפעל מיקום");
      });

  };
  

  getImage(event) {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      const d = new Date();
      const idImage = d.getDate() + "_" + d.getMonth() + "_" + d.getFullYear() + "__" + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
      const src = event.target;

      firebase.storage().ref("spotImage/" + idImage).putString(src["result"], "data_url", {
        contentType: "image/jpeg"
      }).then((snapshot) => {
        this.photoUrl = "spotImage/" + idImage;
        console.log(snapshot.downloadURL);
      })

    };



    reader.readAsDataURL(event.target.files[0]);
  }

  ngOnInit() {
  }

}
