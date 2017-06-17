import { Component, OnInit, Input } from "@angular/core";
import { Report } from "../../models/Report";

@Component({
  selector: "show-report",
  templateUrl: "./show-report.component.html",
  styleUrls: ["./show-report.component.scss"]
})
export class ShowReportComponent implements OnInit {

  test: string;
  @Input() report: Report;
  constructor() {
  }

  ngOnInit() {
      
  }

}
