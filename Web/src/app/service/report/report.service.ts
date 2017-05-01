import { Injectable } from '@angular/core';
import { Report } from '../../models/Report';
import { Team } from '../../models/Team';
import { TableItem } from '../../models/Table';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ReportService {

  private lastReport: FirebaseObjectObservable<any>;
  public lastReportArr: Report[];

  constructor(private af: AngularFire) {
    this.lastReportArr = [];

  };

  public startShift(teamMembers: string) {

  };

  public getLastReport(table: TableItem) {

    this.lastReport = this.af.database.object('users/' + firebase.auth().currentUser.uid + '/reports');

    //console.log('users/' + firebase.auth().currentUser.uid + '/reports');

    var that = this;
    this.lastReport.subscribe(snapshot => {
      that.lastReportArr = [];
      var i = 0;
      // console.log(snapshot);
      for (var key in snapshot) {
        //console.log(snapshot[key]);
       // if (snapshot[key] != null) {
          that.lastReportArr.push(snapshot[key]);
         // table.addRow([snapshot[key].date, snapshot[key].time, snapshot[key].location, i]);
        //}
        i++;
      }
      // console.log(this.lastReportArr);
    });

    return this.lastReportArr;
  };

  public getLastReportArr(): Report[] {

    return this.lastReportArr;
  }

  public getReports() {

  };

}
