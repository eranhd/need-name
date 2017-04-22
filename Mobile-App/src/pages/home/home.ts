import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    window.localStorage.removeItem('currenuser')
    if(!this.isLoggedin()){
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
    }
  }

isLoggedin(){
  if(window.localStorage.getItem('currenuser')){
    return true;
  }
}
}
