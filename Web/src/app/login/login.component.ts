import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string = "התחברות למערכת";
  private userSer:UserService;

  constructor() { 
    this.userSer = new UserService();
    this.userSer.setUser(null);
  }

  public signIn(){
    var email:string = (<HTMLInputElement>document.getElementById('input_username')).value, password:string = (<HTMLInputElement>document.getElementById('input_password')).value;
    auth().signInWithEmailAndPassword(email, password).catch(function(error){
      console.log('faield');
      
    });

    auth().onAuthStateChanged(this.onAuthStateChangeFunction);

};

onAuthStateChangeFunction(user){
    if (user) {
      console.log('login sucssesfully');
      //document.getElementById('cmd_login').setAttribute('routerLink', 'home'); //routerLink='../home'
    } else {
      return;
    }
};

  ngOnInit() {
  }

}
