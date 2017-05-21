import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { User } from '../../models/User';
import { FirebaseService } from '../firebase/firebase.service';
import { LocalStorageService } from '../local-storage/local-storage.service';


@Injectable()
export class UserService{
  user:User;
  userLogin:boolean;
  
  
  constructor() {   
    //need delete
    this.user = new User();
    if(LocalStorageService.loadUser())
      this.user = new User(LocalStorageService.loadUser());
  };

  set _user(user:User){
    this.user = new User(user);
  }

  get _user(){
    return this.user;
  }
  public setUser(id:string, user?:User){
    /*
    if(user){
      this.user = user;
      localStorage.setItem('appUser', JSON.stringify(user));
    }
    else{
      let recognizeUser = localStorage.getItem('appUser');
      console.log(recognizeUser);
      if(recognizeUser)
        this.user = JSON.parse(recognizeUser);
      else{
        this.user = new User(id);
        console.log(JSON.stringify(this.user));
        localStorage.setItem('appUser', JSON.stringify(this.user));
      }
    }
    this.item = this.af.database.object('/users/' + firebase.auth().currentUser.uid + '/details');
    this.item.subscribe((snapshot)=>{
      console.log(snapshot)
      this.user = snapshot;
    });
    this.userLogin = true;
    this.updateUser();
    */
  }

  updateUser(){
    /*console.log(this.user);
    this.item.update(this.user);//new to get the user from firebase
    console.log('write');*/
  }


  public addSon(user_id:string){
    /*
    this.user.addSon(user_id);
    console.log('user:');
    this.updateUser();
    /*console.log(this.user);
    this.fireService.updateUser(this.user);*/
  }

  public setRouter(r:Router){
    
  }



  public setUserLogin(b){

  }

  public isLogin(){
    return this.userLogin;
  };

  get sons(){
    return this.user.details.son;
  }


};
