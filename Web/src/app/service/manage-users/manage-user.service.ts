import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { auth } from 'firebase';

@Injectable()
export class ManageUserService {

  constructor(private af:AngularFire
  ) { }

  public signIn(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error;
    var errorMessage = error.message;
  });
  };
  
  public getAllUsers(){

  };

  public getUserDetail(user){

  };
}
