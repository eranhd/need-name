import { Component, OnInit } from '@angular/core';
import { ManageUserService } from '../../service/manage-users/manage-user.service';
import { User } from '../../models/User';
import { UserService } from '../../service/user/user.service';
import { FirebaseService } from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  types: any[];
  newUser: User;
  email: string;
  password: string;
  _vlidation_password: string;
  name: string;
  role: string;
  type: string;
  error: string;

  constructor(public userService: UserService,
              public firebaseService: FirebaseService
              ) {
                this.types = [{value: 1 ,valueToShow: 'צוות סיור' }, 
                {value: 2 ,valueToShow: 'רכז אזור' },
                {value: 3 ,valueToShow: 'מנהל כללי' }];//need to remove
          this.name = '';
          this.role = this.types[0].value;
          this.type = 'parentPatrol';
          this.userService._user.details.son
  }

  get vlidation_password(){
    return this._vlidation_password;
  }

  set vlidation_password(password: string){
    if(this.password != password)
      this.error = "הסיסמאות אינם תואמות";
    else
      this.error = '';
    this._vlidation_password = password;
  }

   public signup(){
     if(this.password != this.vlidation_password){
        return;     
     }
     if( !(this.email == '' || !this.email || this.password == '' || !this.password)){
        this.newUser = new User();
        this.newUser.details.name = this.name;
        // console.log(this.type + ' , ' + this.role);
         if(this.userService.user.details.role.type == 4)
        {
          this.newUser.details.set_role(parseInt(this.role), this.type);
        }
        else
          this.newUser.details.set_role(this.userService.user.details.role.type - 1, this.userService.user.details.role.name);
        this.firebaseService.createNewUser(this.email, this.password, this.newUser);
     }
     else{
       console.log('error in create user')
     }
   };

    clear(){
      this.password = '';
      this._vlidation_password = '';
      this.email = '';
      this.name = '';
    }
  ngOnInit() {
  }

}
