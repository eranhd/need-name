import { Component, OnInit } from '@angular/core';
import { auth, initializeApp } from 'firebase';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../service/firebase/firebase.service';


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
    public firebaseService: FirebaseService,
    public role: RoleService,
    public userService: UserService) {
    if (window.innerWidth < 800) {
      this.router.navigate(['mobile_login']);
    }
    console.log(firebase.storage().ref().child('spotImage').getDownloadURL().then(url=>{
      console.log(url);
    }))

  }

  public signIn() {
    if(this.email == '' || this.pass == '')
      return;
    firebase.auth().signInWithEmailAndPassword(this.email, this.pass).then(user=>{
      console.log('login succsess');
      localStorage.setItem('userAndPassword', JSON.stringify({email: this.email, password: this.pass}));
      this.firebaseService.initUser('main');
    }).catch(error=>{
        console.log(error.message);
      this.error = 'אנא נסה שנית';
    });    
    



  };

  public signOut() {
    // this.af.auth.logout();
  }

  ngOnInit() {
  }

}
