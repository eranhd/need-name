import { Component, OnInit } from '@angular/core';
import { auth, initializeApp } from 'firebase';
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
  isLogin: boolean = false;

  constructor(public router: Router,
    
    public firebaseService: FirebaseService,
    public role: RoleService
    ) {
    if (window.innerWidth < 800) {
      this.router.navigate(['mobile_login']);
    }
    

  }

  public signIn() {
    this.isLogin = true;
    if(this.email == '' || this.pass == ''){
      this.isLogin = false;
      return;
    }
    firebase.auth().signInWithEmailAndPassword(this.email, this.pass).then(user=>{
      console.log('login succsess');
      this.firebaseService.initUser('main');
    }).catch(error=>{
        console.log(error.message);
        this.isLogin = false;
      this.error = 'אנא נסה שנית';
    });    
    



  };

  public signOut() {
    // this.af.auth.logout();
  }

  ngOnInit() {
  }

}
