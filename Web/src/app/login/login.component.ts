import { Component, OnInit } from '@angular/core';
import { auth, initializeApp } from 'firebase';
import { UserService } from '../service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//var b:boolean;
export class LoginComponent implements OnInit {

  title:string = "התחברות למערכת";


  constructor(private router:Router, private userSer:UserService) { 
    
  }

  public signIn(){
    var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
    if(email == '' || password == '')
      return;
    this.userSer.setUsernameAndPassword(email, password);
    var loginSuccess:boolean = false;
    try{
      firebase.auth().signInWithEmailAndPassword(this.userSer.getUsername(), this.userSer.getPassword())
        var user = firebase.auth().currentUser;
        if(user)
          this.router.navigate(['home']);
        console.log(user);
      
    }catch(error){
      console.log(error);
    }
  };

  public signOut(){
    console.log('try to out');
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  ngOnInit() {
  }

}
