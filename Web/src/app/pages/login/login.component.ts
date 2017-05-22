import { Component, OnInit } from '@angular/core';
import { auth, initializeApp } from 'firebase';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { RoleService } from '../../service/role/role.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//var b:boolean;
export class LoginComponent implements OnInit {
  message: string = 'כדי להיכנס למערכת עליכם להיות רשומים, להרשמה דברו עם הרכז האזורי';
  error: string;
  title:string = "התחברות למערכת";
  email: string;
  pass: string;

  constructor(public router:Router, 
    public userServ:UserService,
    public firebseService: FirebaseService,
    public role:RoleService,
    public af:AngularFire,
    public userService:UserService) { 
      if(window.innerWidth < 800){
        this.router.navigate(['mobile_login']);
      }
      //if()
    //this.signOut();
    // else
      //this.signIn();
  }

  public signIn(){
    //var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
    this.af.auth.login({
      email:'eranm22@gmail.com',//email:email, 
      password:'111111'//password:password
    }).then((succsess)=>{
      this.firebseService.initUser('main');
    }).catch((error)=>{
      console.log(error.message);
      this.error = 'אנא נסה שנית';
    });
    
  
    
  };

  public signOut(){
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
