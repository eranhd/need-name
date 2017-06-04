import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Shift } from '../../models/Shift';

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
    else{
      user = JSON.parse(user);
      user = new User(user);
      let d = new Date();
      
    }

    return user;
  }

  static saveId(id:string){
    localStorage.setItem('shiftId', id + '');
  }
  static clearId(){
    localStorage.setItem('shiftId', '');
  }

  static getId(){
    if(localStorage.getItem('shiftId'))
      return localStorage.getItem('shiftId');
    return null;
  }

  static saveShift(shift: Shift, id: string){
    localStorage.setItem('currentShift', JSON.stringify(shift));
    this.saveId(id);
  }
  static loadShift(){
    let shift: Shift = null;
    if(localStorage.getItem('currentShift') == '' || !localStorage.getItem('currentShift'))
    return null;
    shift = <Shift> JSON.parse(localStorage.getItem('currentShift'));
    
    let temp = new Shift(null, null);
    temp.clone(shift);

    console.log(temp)
    return temp;
  }

  static clearShift(){
    this.clearId();
    localStorage.setItem('currentShift', '');
  }


}
