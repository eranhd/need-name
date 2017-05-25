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
  title: string = "התחברות למערכת";
  email: string;
  pass: string;
  
  constructor(public router: Router,
    public userServ: UserService,
    public firebseService: FirebaseService,
    public role: RoleService,
    public af: AngularFire,
    public userService: UserService) {
    if (window.innerWidth < 800) {
      this.router.navigate(['mobile_login']);
    }
    //if()
    //this.signOut();
    // else
    //this.signIn();

    console.log(firebase.storage().ref().child('spotImage').getDownloadURL().then(url=>{
      console.log(url);
    }))

    //var storage    = firebase.storage();
    //var storageRef = storage.ref();
    //var spaceRef = storageRef.child('images/photo_1.png');
    //
    //storageRef.child('images/photo_1.png').getDownloadURL().then(function(url) {
    //
    //
    //  var test = url;
    //  add this line here:
    //  document.querySelector('img').src = test;
    //
    //}).catch(function(error) {
    //
    //});
    //
    // this.test = 'https://firebasestorage.googleapis.com/v0/b/antidrugsjerusalem.appspot.com/o/spotImage?alt=media&token=32f7eb20-86df-4e09-a33d-053e04f54f48';

    
  }

  public signIn() {
    //var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
    this.af.auth.login({
      email: this.email,//email:email, 
      password: this.pass//password:password
    }).then((succsess) => {
      this.firebseService.initUser('main');
    }).catch((error) => {
      console.log(error.message);
      this.error = 'אנא נסה שנית';
    });



  };

  public signOut() {
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
