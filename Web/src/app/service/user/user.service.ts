import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { User } from '../../models/User';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UserService{
  private item;
  user:User;
  private userLogin:boolean;
  
  
  constructor() {   
    this.user = new User('1122');
    //this.setUser('1122');
  };

  public setUser(id:string){
    
    this.item = firebase.database().ref('/users/' + firebase.auth().currentUser.uid);
    this.item.update({'details' : this.user.getUser('1122')});
    console.log('write');
  }
 

  public setUserLogin(user){
    this.userLogin = user;
  };


  public isLogin(){
    return this.userLogin;
  };


};
