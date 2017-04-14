import { Injectable } from '@angular/core';
import {Report } from '../../models/Report';
import {Team } from '../../models/Team';

@Injectable()
export class ReportService {

  constructor() { 
    
  };

  public startShift(teamMembers:string){
    
  };

  public getLastReport(){
    var arr:Report[] = [
      new Report(new Date, new Team),
      new Report(new Date, new Team),
      new Report(new Date, new Team)
    ];
    return arr;
  };

  public getReports(){

  };

}
