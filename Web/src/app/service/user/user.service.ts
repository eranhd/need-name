import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  private user;
  
  constructor() { 
    this.user = null;
  };

  public setUser(user){
    this.user = user;
    console.log('user set');
  };


};
