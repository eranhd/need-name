import { Injectable } from '@angular/core';
import { Report } from '../../models/Report';
import { Team } from '../../models/Team';
import { TableItem } from '../../models/Table';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {UserService} from '../user/user.service';

@Injectable()
export class ReportService {

  private lastReport: FirebaseObjectObservable<any>;
  public lastReportArr: Report[];

  constructor(private af: AngularFire, public userService:UserService) {
    this.lastReportArr = [];

  };

  public startShift(teamMembers: string) {

  };

  public getLastReport() {

    this.lastReport = this.af.database.object('users/' + firebase.auth().currentUser.uid + '/reports');


    this.lastReport.subscribe(snapshot => {
      this.lastReportArr = [];
      var i = 0;
      console.log(snapshot);
      for (var key in snapshot) {
        this.lastReportArr.push(snapshot[key]);
        i++;
      }
    });


/*
    for( let sons of this.userService.sons){
      let temp =   this.af.database.object('users/' + sons + '/reports');
      temp.subscribe(snapshot=>{
        for (var key in snapshot) {
          this.lastReportArr.push(snapshot[key]);
        }
      });
    }*/
    return this.lastReportArr;
  };

  public getLastReportArr(): Report[] {

    return this.lastReportArr;
  }

  public getReports() {

  };

}
