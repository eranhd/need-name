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


    this.lastReport.subscribe(snapshot => {
      this.lastReportArr = [];
      var i = 0;
      console.log(snapshot);
      for (var key in snapshot) {
        this.lastReportArr.push(snapshot[key]);
        i++;
      }
    });

    let sons = this.af.database.object('users/' + firebase.auth().currentUser.uid + '/details/_sons');
    sons.subscribe(snapshot=>{
      console.log(snapshot);
    });


    return this.lastReportArr;
  };

  public getLastReportArr(): Report[] {

    return this.lastReportArr;
  }

  public getReports() {

  };

}
