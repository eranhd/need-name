import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mobile-header",
  templateUrl: "./mobile-header.component.html",
  styleUrls: ["./mobile-header.component.css"]
})
export class MobileHeaderComponent implements OnInit {

  @Input() showBack: boolean;
  constructor() { }

  ngOnInit() {
  }

}
