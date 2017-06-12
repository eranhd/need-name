import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { auth, database } from 'firebase';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { SettingReportService } from '../setting-report/setting-report.service';
import { User } from '../../models/User';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Report } from '../../models/Report';
import { Shift } from '../../models/Shift';
import { ShiftService } from '../shift/shift.service';
import { Location } from '../../models/Location';


@Injectable()
export class FirebaseService {

  private itemToSave: FirebaseListObservable<any>;
  private userToSave: FirebaseListObservable<any>;//this user and all report saves in firebase
  private shiftsToSave: FirebaseListObservable<any>;
  private reportsToSave: FirebaseListObservable<any>;
  private database;
  private auth;

  private reObsarvable: FirebaseListObservable<any>;
  private shiftsId: string[];
  reportsId: string[];
  private coldSpotId: string[];
  private hotSpotId: string[];
  private locationsId: string[];

  shiftObsarvable: Observable<Array<Shift>>;
  reportObsarvable: Observable<Array<Shift>>;
  hotObsarvable: Observable<Array<Shift>>;
  coldObsarvable: Observable<Array<Shift>>;
  locationObsarvable: Observable<Array<Shift>>;

  sonsObsarvable: FirebaseListObservable<any>[];

  isUserInit: boolean  = false;

  shifts: Shift[];
  reports: Report[];
  hotSpots: Report[];
  coldSpots: Location[];
  locations: Location[];

  private listenSons: string[];

  constructor(private af: AngularFireModule,
    public shiftService: ShiftService,
    public userService: UserService,
    public afDb: AngularFireDatabase,
    public router: Router,
    public afAuth: AngularFireAuth
  ) {

    this.shifts = [];
    this.userToSave = afDb.list('/users');
    this.shiftsToSave = this.afDb.list('/shifts');// refernce  to shifts
    this.initLocations();


    this.shiftObsarvable = afDb.list('shifts');
    this.reportObsarvable = afDb.list('reports');
    this.hotObsarvable = afDb.list('hotSpots');
    this.coldObsarvable = afDb.list('coldSpots');


  };

  public getDatabase() { return this.database; };
  public getAuth() { return this.auth; };

  public login(email: string, pass: string) {

    if (email == '' || pass == '')
      return;
    this.auth.signInWithEmailAndPassword(email, pass).catch(function (error) {
      console.log(error.message);
      console.log(error.code);
    });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
      }
      else {
        console.log('field');
      }
    });

  };

  public getReportFields() {
    this.itemToSave = this.afDb.list('/users/' + firebase.auth().currentUser.uid + '/details');
    firebase.database().ref('report-fields').once('value').then(function (snapshot) {
    });
  }

  updateUser(user, id?: string) {
    if (id) {
      this.userToSave.update(id, user).catch(error => { console.log(error.message) })
    }
    else {
      this.userToSave.update(firebase.auth().currentUser.uid, user).catch(error => {
        console.log(error.message);
      });

      console.log(user);
    }
  }


  private getAllDataFromDb() {
    this.shiftObsarvable.subscribe(val => {
      //clear all array when shift chnage and load from firebase again
      this.shifts = [];
      this.reportsId = [];
      this.coldSpotId = [];
      this.hotSpotId = [];
      // console.log(this.shiftsId);

      val.forEach(item => {
        // console.log(item['$key'])
        if (this.checkIfShiftBelong(item['$key'])) {

          this.shifts.push(item);

          // console.log(item)
          if (item.reportsId) {

            for (let report of item.reportsId) {
              this.reportsId.push(report);
            }
          }
          if (item.coldSpotId)
            for (let id of item.coldSpotId) {
              this.coldSpotId.push(id);
            }
          if (item.hotSpotId)
            for (let id of item.hotSpotId) {
              this.hotSpotId.push(id);
            }
        }
        // console.log(this.reportsId);


      })
    });

    // console.log(this.shiftsId)

  }





  createNewUser(email: string, password: string, user: User) {
    let newId = '';
    firebase.auth().createUserWithEmailAndPassword(email, password).then(snapshot => {
      this.userService._user.details._sons.unshift(snapshot.uid);
      this.updateUser(this.userService._user, firebase.auth().currentUser.uid);
      this.updateUser(user, snapshot.uid);
      newId = snapshot.uid;
    }).catch(error => {
      console.log('error create user');
    });

  }

  searchInSons(id) {
    for (let i of this.listenSons)
      if (i == id)
        return true;
    return false;
  }

  searchInShiftId(id) {
    if (!this.shiftsId) {
      this.shiftsId = [];
      return false;
    }
    for (let i of this.shiftsId)
      if (i == id)
        return true;
    return false;
  }

  listenToSon(id: string) {
    if (!this.listenSons)
      this.listenSons = [];
    if (!this.searchInSons(id))
      this.listenSons.push(id);
    else
      return; // stop
    //console.log(this.listenSons);
    let listen: FirebaseListObservable<any> = this.afDb.list('users/' + id);
    listen.subscribe(val => {
      //console.log(val)
      if (val[0]._sons) {
        for (let id of val[0]._sons)
          this.listenToSon(id);
      }
      if (val.length > 1)
        for (let shift of val[1]) {
          if (!this.searchInShiftId(shift))
            this.shiftsId.push(shift);
        }
      //console.log(this.shiftsId)
      this.getAllDataFromDb();
    },
      error => {
        console.log(error.message);
      });
  }


  initUser(goto?: string) {

    firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value').then(snapshot => {
      
      this.userService._user = snapshot.val();
      if (this.userService._user.shiftsId) {
        for (let id of this.userService._user.shiftsId) {
      
          if (!this.shiftsId)
            this.shiftsId = [];
          this.shiftsId.push(id)
        }
      }
      

      for (let id of this.userService._user.details._sons)
        this.listenToSon(id);
      this.getAllDataFromDb();
      this.isUserInit = true;
      if (goto) {
        this.router.navigate([goto]);
      }
    }).catch(error => { console.log(error.message) })

  }
  initLocations() {
    firebase.database().ref('/locations/').once('value', ids => {
      for (let key in ids) {
        if (!this.locationsId)
          this.locationsId = [];
        this.locationsId.push(key)
      }
      for (let id of this.locationsId) {
        firebase.database().ref('/locations/' + id).once('value').then(loc => {
          if (!this.locations)
            this.locations = [];
          this.locations.push(loc);
        }).catch(error => { console.log(error.message) })
      }
    })
  }


  saveShift() {

    this.afDb.list('/shifts').push(this.shiftService.shift).then(resolve => {

      console.log(resolve.path.o[1]);
      this.userService.addShift(resolve.path.o[1]);
      this.shiftService.id = resolve.path.o[1];
      this.updateUser(this.userService.user);
      this.updateShift();
    }).catch(error => {

    });

  }

  updateShift() {//this will call after add report to shift 
    // console.log('in update shift ' + this.shiftService.id);
    this.shiftsToSave.update(this.shiftService.id, this.shiftService.shift).then(resolve => {
      console.log('shift update');
    }).catch(error => {
      console.log(error.message);
    });
  }

  saveReport(report: Report, id: string) {//when want to save new report, then i save the report in new id and add the id to reportsid 
    console.log(report);
    if (id == '2') {//save hot spot
      this.saveHotSpot(report);
    }
    else if (id == '1') {//save just report
      this.afDb.list('/reports').push(report).then(resolve => {
        let id = resolve.path.o[1];
        console.log(resolve.path.o[1]);
        this.shiftService.addReport(report, id);
        this.updateShift();
      }).catch(error => {
        console.log(error.message);
      });
    }
  }

  saveHotSpot(report: Report) {
    this.afDb.list('/hotSpots').push(report).then(resolve => {
      let id = resolve.path.o[1];
      console.log(resolve.path.o[1]);
      this.shiftService.addHotSpot(id);
      this.updateShift();
    }).catch(error => {
      console.log(error.message);
    });
  }

  saveColdSpot(location: Location) {
    this.afDb.list('/coldSpots').push(location).then(resolve => {
      let id = resolve.path.o[1];
      console.log(resolve.path.o[1]);
      this.shiftService.addColdSpot(id);
      this.updateShift();
    }).catch(error => {
      console.log(error.message);
    });
  }

  uploadReport(report: Report) {

  }


  saveLoacation(loc: Location) {//this function save the location and name as insert by user in start patrol or spot
    this.afDb.list('/locations').push(loc).then(resolve => {
      console.log('location save');
    }).catch(error => {
      console.log(error.message);
    })
  }


  checkIfShiftBelong(id: any) {
    if (id) {
      if (!this.shiftsId || this.shiftsId.length == 0)
        return false;
      for (let i of this.shiftsId)
        if (i == id) {
          return true;
        }
    }
    return false;
  }

  checkIfReportBelong(id: any) {
    if (id) {
      if (!this.reportsId || this.reportsId.length == 0)
        return false;
      for (let i of this.reportsId)
        if (i == id.$key || i == id) {
          return true;
        }
    }
    return false;
  }

  checkIfHotBelong(id: any) {
    if (id) {
      if (!this.hotSpotId || this.hotSpotId.length == 0)
        return false;
      for (let i of this.hotSpotId)
        if (i == id.$key || i == id) {
          return true;
        }
    }
    return false;
  }

  checkIfColdBelong(id: any) {
    if (id) {
      if (!this.coldSpotId || this.coldSpotId.length == 0)
        return false;
      for (let i of this.coldSpotId)
        if (i == id.$key || i == id) {
          return true;
        }
    }
    return false;
  }

  getShift(id: string) {
    return this.shiftObsarvable.map(val => {
      for (let shift of val)
        if (shift['key'] == id) {
          return shift;
        }
    })

  }

  public removeData(type: string, id: string) {

    let s = null;

    if (type == 'shifts') {
      s = this.afDb.list('shifts/' + id);
      s.subscribe(val => {
        console.log(val);
        for (let item of val) {
          if (item.$key == 'coldSpotId')
            for (let c of item)
              this.removeData('coldSpots', c);
          if (val.$key == 'hotSpotId')
            for (let h of item)
              this.removeData('hotSpots', h);

          if (val.$key == 'reportsId')
            for (let r of item)
              this.removeData('reports', r);

        }
        firebase.database().ref('/' + type + '/' + id).remove().then(res => { 
          console.log(res) }).catch(err => 
          { console.log(err.message) });
        return;
      })
    }
    else if (type == 'reports' || type == 'hotSpots' || type == 'coldSpots') {
      firebase.database().ref('/' + type + '/' + id).remove().then(
        res => { console.log(res) }).catch(
        err => { console.log(err.message) });
      return;
    }
  }

  public initFirebase() {
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
