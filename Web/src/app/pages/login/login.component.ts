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

  title:string = "התחברות למערכת";


  constructor(private router:Router, 
    private userServ:UserService,
    private role:RoleService,
    private af:AngularFire) { 
    //this.signOut();
    this.signIn();
  }

  public signIn(){
    //var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
    this.af.auth.login({
      email:'eranm22@gmail.com',//email:email, 
      password:'111111'//password:password
    }).then((succsess)=>{
      var userSer:UserService = new UserService();
      console.log(succsess);
      userSer.setRouter(this.router);
      userSer.setUser(firebase.auth().currentUser.uid);
      this.router.navigate(['main']);
    }).catch((error)=>{
      console.log(error.message);
    });
  
    
  };

  public signOut(){
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
