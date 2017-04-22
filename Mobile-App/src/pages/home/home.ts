import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../pages/login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    window.localStorage.removeItem('currenuser')
    if(!this.isLoggedin()){
      console.log('You are not logged in');
      this.navCtrl.push(Login);
    }
  }

isLoggedin(){
  if(window.localStorage.getItem('currenuser')){
    return true;
  }
}
}
