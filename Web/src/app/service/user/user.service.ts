import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';


@Injectable()
export class UserService{
  private firebaseinit
  private userLogin:boolean;
  private username:string;
  private password:string;
  
  constructor() {   
  };
 

  public setUserLogin(user){
    this.userLogin = user;
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
  };

  public isLogin(){
    return this.userLogin;
  };


};
