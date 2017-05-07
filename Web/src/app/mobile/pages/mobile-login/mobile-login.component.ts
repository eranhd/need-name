import { Component, OnInit } from '@angular/core';
import { auth, initializeApp } from 'firebase';
import { UserService } from '../../../service/user/user.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrls: ['./mobile-login.component.css']
})
//var b:boolean;
export class MobileLoginComponent implements OnInit {
  email: any;
  password: any;
  title:string = "כניסה";


  constructor(private router:Router, 
    private userServ:UserService,
    //private role:RoleService,
    private af:AngularFire) { 
    //this.signOut();
    this.signIn();
  }

  public signIn(){
    //var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
    this.af.auth.login({
      email:this.email, 
      password:this.password
    }).then((succsess)=>{
      
      console.log(succsess);
     // userSer.setRouter(this.router);
     // userSer.setUser(firebase.auth().currentUser.uid);
      this.router.navigate(['mobile-main']);
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

