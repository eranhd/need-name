import { Component, OnInit } from '@angular/core';
import { auth, initializeApp } from 'firebase';
import { UserService } from '../service/user/user.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase/firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//var b:boolean;
export class LoginComponent implements OnInit {

  title:string = "התחברות למערכת";


  constructor(private router:Router, private userSer:UserService,
    private af:AngularFire) { 
    this.signOut();
    
  }

  public signIn(){
    var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
    this.af.auth.login({email:email, password:password}).then((succsess)=>{
      
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
