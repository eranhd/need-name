import { Component, OnInit, Input } from "@angular/core";
import { Report } from "../../models/Report";

@Component({
  selector: "app-show-report",
  templateUrl: "./show-report.component.html",
  styleUrls: ["./show-report.component.css"]
})
export class ShowReportComponent implements OnInit {

  test: string;
  @Input() report: Report;
  constructor() {
  }

  ngOnInit() {
      console.log("test")
      console.log(this.report);
      firebase.storage().ref().child(this.report.photoUrl).getDownloadURL().then(url => {
      this.test = url;
    }).catch(error => {
      console.log(error.message);
    });
  }

}
