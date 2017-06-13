import { Component, OnInit, Input } from "@angular/core";
import { Report } from "../../../models/Report";
import { TitleComponent } from "./title/title.component";
import { BodyComponent } from "./body/body.component";

@Component({
  selector: "popup-report",
  templateUrl: "./popup-report.component.html",
  styleUrls: ["./popup-report.component.scss"]
})
export class PopupReportComponent implements OnInit {


  @Input() report: Report;
  constructor() { }

  ngOnInit() {
  }

}
