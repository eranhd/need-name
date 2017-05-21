import { Component, OnInit,HostBinding } from '@angular/core';
import { auth, initializeApp } from 'firebase';
import { UserService } from '../../../service/user/user.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { AngularFire, FirebaseListObservable ,AuthProviders,AuthMethods} from 'angularfire2';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrls: ['./mobile-login.component.css'],
})

export class MobileLoginComponent implements OnInit {
  email: any;
  password: any;
  
  title:string = "כניסה";


  constructor(private router:Router,
    public userServ:UserService,
    public af:AngularFire,
    public userService:UserService,
    public firebaseService: FirebaseService) { 
  }

  public signIn(){
    if(this.email == '' || this.password == '')
      return;
    this.af.auth.login({
      email: this.email, 
      password:this.password
    }).then((succsess)=>{
      this.firebaseService.initUser('mobile_main');
    }).catch((error)=>{
      console.log(error.message);
    });
  
    
  };

  ngOnInit() {
  }

}

