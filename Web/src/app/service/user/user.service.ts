import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { User } from '../../models/User';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class UserService{
  private item: FirebaseObjectObservable<any>;
  user:User;
  private userLogin:boolean;
  private router:Router;
  
  
  constructor(private fireService:FirebaseService, public af:AngularFire) {   
    this.userLogin = true;
  };

  public setUser(id:string, u?:User){
    this.user = new User(id);
    if(u){
      this.user = u;
    }
    this.item = this.af.database.object('/users/' + firebase.auth().currentUser.uid + '/details');
    this.item.subscribe((snapshot)=>{
      console.log(snapshot)
      this.user = snapshot;
    });
    this.userLogin = true;
    this.updateUser();
  }

  updateUser(){
    /*console.log(this.user);
    this.item.update(this.user);//new to get the user from firebase
    console.log('write');*/
  }


  public addSon(user_id:string){
    
    this.user.addSon(user_id);
    console.log('user:');
    this.updateUser();
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

  get sons(){
    return this.user.son;
  }


};
