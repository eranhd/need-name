import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { User } from '../../models/User';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class UserService{
  private item;
  user:User;
  private userLogin:boolean;
  private router:Router;
  
  
  constructor(private fireService:FirebaseService) {   
    this.userLogin = true;
  };

  public setUser(id:string){
    this.user = new User(id);
    this.item = firebase.database().ref('/users/' + firebase.auth().currentUser.uid);
    this.userLogin = true;
    this.updateUser();
  }

  updateUser(){
    this.item.update({'details' : this.user});//new to get the user from firebase
    console.log('write');
  }


  public addSon(user_id:string){
    
    this.user.setSon(user_id);
    console.log('user:');
    /*console.log(this.user);
    this.fireService.updateUser(this.user);*/
  }

  public setRouter(r:Router){
    this.router = r;
    r.navigate(['home']);
  }



  public setUserLogin(b){

  }

  public isLogin(){
    return this.userLogin;
  };


};
