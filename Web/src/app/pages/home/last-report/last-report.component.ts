import { Component, OnInit, Input } from "@angular/core";
import { Report } from "../../../models/Report";
import { MdDialogModule } from "@angular/material";


@Component({
  selector: "app-last-report",
  templateUrl: "./last-report.component.html",
  styleUrls: ["./last-report.component.scss"]
})
export class LastReportComponent implements OnInit {

  @Input() report: Report;
  private showPopup: boolean;

  constructor(public dialog: MdDialogModule) {
    this.showPopup = false;

  }

  private setPopup(){

  /*  console.log(Report);
    this.showPopup = !this.showPopup;*/
    /*this.dialog.open(DialogLastReport,{
      position: "absolute",
      width: "50%",
      height: "50%"
    });*/
  }

  ngOnInit() {

  }

}


@Component({
  selector: "md-dialog-last-report",
  templateUrl: "./dialog.html"
})

export class DialogLastReport{

}
