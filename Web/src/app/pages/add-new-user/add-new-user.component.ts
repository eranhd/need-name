import { Component, OnInit } from "@angular/core";
import { ManageUserService } from "../../service/manage-users/manage-user.service";
import { User } from "../../models/User";
import { UserService } from "../../service/user/user.service";
import { FirebaseService } from "../../service/firebase/firebase.service";

@Component({
  selector: "app-add-new-user",
  templateUrl: "./add-new-user.component.html",
  styleUrls: ["./add-new-user.component.scss"]
})
export class AddNewUserComponent implements OnInit {

  types: any[];
  newUser: User;
  email: string;
  password: string;
  _passwordAgain: string;
  error_message: string = "";
  name: string;
  role: string;
  type: string;

  constructor(public userService: UserService,
              public firebaseService: FirebaseService
              ) {
                this.types = [{value: 1 , valueToShow: "צוות סיור" },
                {value: 2 , valueToShow: "רכז אזור" },
                {value: 3 , valueToShow: "מנהל כללי" }]; //need to remove
  //    for(let str of this.userService._user.details.role.getRolesName())
          // this.types.push({value: str, valueToShow: str});
          this.name = "";
          this.role = this.types[0].value;
          this.type = "parentPatrol";
  }

   public signup(){
     if(this._passwordAgain !== this.password)
      return;
     if ( !(this.email == "" || !this.email || this.password == "" || !this.password)){
        this.newUser = new User();
        this.newUser.details.name = this.name;
        // console.log(this.type + " , " + this.role);
         if (this.userService.user.details.role.type == 4)
        {
          this.newUser.details.set_role(parseInt(this.role), this.type);
        }
        else
          this.newUser.details.set_role(this.userService.user.details.role.type - 1, this.userService.user.details.role.name);
        this.firebaseService.createNewUser(this.email, this.password, this.newUser);
     }
     else{
       console.log("error in create user")
     }
   };

   get passwordAgain(){
    if(this.password !== this._passwordAgain)
      this.error_message = "הסיסמאות אינם תואמות";
    else
      this.error_message = "";
    return this._passwordAgain;
   }

   set passwordAgain(str:string){
    this._passwordAgain = str;
   }

   clear(){

   }
  ngOnInit() {
  }

}
