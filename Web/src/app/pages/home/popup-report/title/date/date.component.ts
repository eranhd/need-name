import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-popup-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"]
})
export class DateComponent implements OnInit {

  @Input() date: string;
  @Input() time: string;
  constructor() { }

  ngOnInit() {
  }

}
