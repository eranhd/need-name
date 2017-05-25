import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { auth } from 'firebase';
import { UserService } from '../user/user.service';
import { User } from '../../models/User';

@Injectable()
export class ManageUserService {

  constructor(private af:AngularFire,
              private userService:UserService
  ) { }

  public signUp(email, password){
  //   firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
  //     console.log(user);
  //     //let us = new User(user.)
  //     this.userService.addSon(user.uid);
  //   }).catch(function(error) {
  //   var errorCode = error;
  //   var errorMessage = error.message;
  // });
  };
  
  public getAllUsers(){

  };

  public getUserDetail(user){

  };
}
