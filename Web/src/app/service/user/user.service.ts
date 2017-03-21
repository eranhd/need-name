import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  private user;
  private username:string;
  private password:string;
  
  constructor() { 
    
  };

  public setUser(user){
    this.user = user;
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


};
