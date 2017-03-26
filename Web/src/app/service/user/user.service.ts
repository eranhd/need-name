import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { auth, initializeApp } from 'firebase';


@Injectable()
export class UserService{
  private firebaseinit
  private userLogin;
  private username:string;
  private password:string;
  
  constructor() {   
  };
 

  public setUserLogin(user){
    this.userLogin = user;
    console.log('user set');
  };

  public getUsername(){
    return this.username;
  };
  public getPassword(){
    return this.password;
  };

  public setUsernameAndPassword(username:string, password:string){
    this.username = username;
    this.password = password;
   // console.log(this.username + ' ' + this.password);
  };

  public isLogin(){
    return (firebase.auth().currentUser != null);
  };


};
