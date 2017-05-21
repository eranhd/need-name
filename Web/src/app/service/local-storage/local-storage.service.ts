import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable()
export class LocalStorageService {

  constructor() { 

  }

  static saveUser(user: User ){
    localStorage.setItem('adjTempUser', JSON.stringify(user));
  }

  static clearUser(){
    localStorage.setItem('adjTempUser', '');
  }

  static loadUser(){
    let user = null;
    user = localStorage.getItem('adjTempUser');
    if(user == '' || user == null || user == undefined)
      return null;
    else
      user = JSON.parse(user);
    return user;
  }

}
