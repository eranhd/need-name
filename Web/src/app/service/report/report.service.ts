import { Injectable } from '@angular/core';
import { Report } from '../../models/Report';
import { Team } from '../../models/Team';
import { TableItem } from '../../models/Table';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import {UserService} from '../user/user.service';

@Injectable()
export class ReportService {

  private lastReport: FirebaseObjectObservable<any>;
  public lastReportArr: Report[];

  constructor(private af: AngularFireDatabase, public userService:UserService) {
    this.lastReportArr = [];

  };

  public startShift(teamMembers: string) {

  };

  public getLastReport() {

    this.lastReport = this.af.object('users/' + firebase.auth().currentUser.uid + '/reports');


    this.lastReport.subscribe(snapshot => {
      this.lastReportArr = [];
      var i = 0;
      console.log(snapshot);
      for (var key in snapshot) {
        this.lastReportArr.push(snapshot[key]);
        i++;
      }
    });
    return this.lastReportArr;
  };

  public getLastReportArr(): Report[] {

    return this.lastReportArr;
  }

  public getReports() {

  };

}
