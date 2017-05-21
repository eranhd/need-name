import { Injectable } from '@angular/core';
import { auth, database } from 'firebase';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { SettingReportService } from '../setting-report/setting-report.service';
import { User } from '../../models/User';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,  } from 'angularfire2';
import { Report } from '../../models/Report';
import { Shift } from '../../models/Shift';
import { ShiftService } from '../shift/shift.service';

@Injectable()
export class FirebaseService {

  private itemToSave: FirebaseListObservable<any>;
  private userToSave: FirebaseListObservable<any>;//this user and all report saves in firebase
  private database;
  private auth;
  shifts: Shift[];

  constructor(private af: AngularFire,
              public shiftService: ShiftService,
              public userService: UserService,
              public router: Router
              ) {
    /*this.initFirebase();
    this.database = firebase.database();
    this.auth = firebase.auth();*/
    //this.itemToSave = af.database.list('/users/' + firebase.auth().currentUser.uid + '/details');
      this.shifts = [];
      this.userToSave = af.database.list('/users');
    
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
        //var userSer:UserService;
        //userSer = new UserService();
        //userSer.setUserLogin(true);
        //console.log('login');

      }
      else{
        console.log('field');
      }
    });

   };

   public getReportFields(){
     this.itemToSave = this.af.database.list('/users/' + firebase.auth().currentUser.uid + '/details');
     firebase.database().ref('report-fields').once('value').then(function(snapshot) {
     // var settServ:SettingReportService = new SettingReportService(this);
      //settServ.inputs =  snapshot.val();      
    });
   }

   updateUser(user){
     this.userToSave.update(firebase.auth().currentUser.uid, user);
    //  this.itemToSave.update('details', user);
    //this.userToSave.
    console.log(user);
   }


   initUser(goto?:string)
   {
    
    this.af.database.object('users/' + firebase.auth().currentUser.uid).subscribe((user:User)=>{
      this.userService.user = user;
      this.userService.userLogin = true;
      if(goto){
        this.router.navigate([goto]);
      }
    });
    
   }


   initShifts(){
    if(this.userService.user.shifts)
      this.shifts = this.userService.user.shifts;
     this.af.database.object('users/' + firebase.auth().currentUser.uid).subscribe(user=>{
      
      if(this.userService.user.details._sons)
      for(let sons of this.userService.user.details._sons)
        this.af.database.object('users/' + firebase.auth().currentUser.uid).subscribe(user=>{
          for( let item of user.shifts)
            this.shifts.push(item);
        });
     });

     //return shifts;
   }

   

   uploadReport(report: Report){

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
