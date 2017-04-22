import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProviders , AuthMethods , AngularFire } from 'angularfire2';
import { HomePage } from '../home/home';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  email: any;
  password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public angfire:AngularFire) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

login(){
  this.angfire.auth.login({
    email: this.email,
    password:this.password
  },
  {
    provider:AuthProviders.Password,
    method:AuthMethods.Password
  }).then((Response)=>{
    console.log('Login success' + JSON.stringify(Response));
    let currentuser = {
      email:Response.auth.email,
      picture: Response.auth.photoURL
    };
    window.localStorage.setItem('currentuser' , JSON.stringify(currentuser));
    this.navCtrl.pop();
  }).catch((error)=>{
    console.log(error);
})
}
}
