import { Injectable } from '@angular/core';
import { auth, database } from 'firebase';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { SettingReportService } from '../setting-report/setting-report.service'

@Injectable()
export class FirebaseService {


  private database;
  private auth;

  constructor() {
    /*this.initFirebase();
    this.database = firebase.database();
    this.auth = firebase.auth();*/
   };

   public getDatabase(){return this.database;};
   public getAuth(){return this.auth;};

   public login(email:string, pass:string){

     if(email == '' || pass == '')
      return;
    this.auth.signInWithEmailAndPassword(email, pass).catch(function(error){
      console.log(error.message);
      console.log(error.code);
    });
    
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        //user login
        var userSer:UserService;
        userSer = new UserService();
        userSer.setUserLogin(true);
        console.log('login');

      }
      else{
        console.log('field');
      }
    });

   };

   public getReportFields(){
     firebase.database().ref('report-fields').once('value').then(function(snapshot) {
      var settServ:SettingReportService = new SettingReportService(this);
      settServ.inputs =  snapshot.val();      
    });
   }


   public initFirebase(){
     var config = {
      apiKey: "AIzaSyAOpMbZqfS8nVvrC-BoPGP-UAmuJdFyLzE",
      authDomain: "anti-drugs-jerusalem.firebaseapp.com",
      databaseURL: "https://anti-drugs-jerusalem.firebaseio.com",
      storageBucket: "anti-drugs-jerusalem.appspot.com",
      messagingSenderId: "944977183444" 
    };
    firebase.initializeApp(config); 
   };

}
