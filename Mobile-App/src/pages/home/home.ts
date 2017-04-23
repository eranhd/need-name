import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginModule } from '../login/login.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    /*window.localStorage.removeItem('currenuser')
    if(!this.isLoggedin()){
      console.log('You are not logged in');*/
      this.navCtrl.push(LoginModule);
    //}
  }

isLoggedin(){
  if(window.localStorage.getItem('currenuser')){
    return true;
  }
}
}
