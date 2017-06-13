import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../service/user/user.service";
import { FirebaseService } from "../../service/firebase/firebase.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {

  constructor(public router: Router, public userService: UserService, public firebaseService: FirebaseService) {
    if (!this.firebaseService.isUserInit)
      this.router.navigate(["login"]);

    // if there is no permission, return to the login page:
    if (!userService.user.details.role.canDirect("main")) {
      this.router.navigate["login"];
    }
  }

  ngOnInit() {

  }

}
