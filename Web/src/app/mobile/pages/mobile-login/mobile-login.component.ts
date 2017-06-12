import { Component, OnInit, HostBinding } from '@angular/core';
import { auth, initializeApp } from 'firebase';
import { UserService } from '../../../service/user/user.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';
import { LocalStorageService } from '../../../service/local-storage/local-storage.service';
import { PushNotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrls: ['./mobile-login.component.css'],
})

export class MobileLoginComponent implements OnInit {
  email: any;
  password: any;
  error: string;
  title: string = "כניסה";
  isLogin: boolean = false;
  dev_statment: string = 'פותח בעזריאלי המכללה להנדסה ירושלים';


  constructor(private router: Router,
    public userServ: UserService,
    public userService: UserService,
    public firebaseService: FirebaseService, private _pushNotifications : PushNotificationsService) {
    this.error = '';
        this._pushNotifications.requestPermission();
  }

  public signIn() {
    if (this.email == '' || this.password == '') {
      return;
    }

    this.isLogin = true;
    navigator.geolocation.getCurrentPosition((position) => {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        console.log('login succsess');
        localStorage.setItem('userAndPassword', JSON.stringify({ email: this.email, password: this.password }));
        this.firebaseService.initUser('mobile_main');
      }).catch(error => {
        console.log(error.message);
        this.error = 'אנא נסה שנית';
        this.isLogin = false;
      });
    }, (error) => {
      this.error = 'אנא הפעל מיקום ופתח מחדש את האפליקציה'
      // alert('אנא הפעל מיקום');
      this.isLogin = false;
    });

  };

  ngOnInit() {
    if (localStorage.getItem('userAndPassword')) {
      let obj = JSON.parse(localStorage.getItem('userAndPassword'));
      this.email = obj.email;
      this.password = obj.password;
    }
    
  }

}

