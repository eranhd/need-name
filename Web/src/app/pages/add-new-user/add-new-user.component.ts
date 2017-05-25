import { Component, OnInit } from '@angular/core';
import { ManageUserService } from '../../service/manage-users/manage-user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  types = [
    {value: 'אחר', viewValue: 'other'},
    {value: 'סיור הורים', viewValue: 'patrol'},
    {value: 'מנהל איזור', viewValue: 'manager'}
  ];

  newUser: User;
  constructor(public manageUsers:ManageUserService
              ) {
      
   }

   public signup(){
     var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
     this.manageUsers.signUp(email, password);
   };

   clear(){
     
   }
  ngOnInit() {
  }

}
