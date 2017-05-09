import { Component, OnInit,HostBinding } from '@angular/core';
import { auth, initializeApp } from 'firebase';
import { UserService } from '../../../service/user/user.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { AngularFire, FirebaseListObservable ,AuthProviders,AuthMethods} from 'angularfire2';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrls: ['./mobile-login.component.css'],
})
//var b:boolean;
export class MobileLoginComponent implements OnInit {
  email: any;
  password: any;
  title:string = "כניסה";


  constructor(private router:Router,
    public userServ:UserService,
    public af:AngularFire,
    public userService:UserService,) { 
    //this.signOut();
    this.signIn();
  }

  public signIn(){
    var email:string = (<HTMLInputElement>document.getElementById('input_username')).value
    var password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
    this.af.auth.login({
      email:email, 
      password:password
    }).then((succsess)=>{
      
      console.log(succsess);
      //this.userServ.setRouter(this.router);
      //this.userServ.setUser(firebase.auth().currentUser.uid);
      this.router.navigate(['mobile_main']);
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

