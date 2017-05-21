import { Team } from './Team';
import {  Report } from './Report';
import { Location } from './Location';

export class Shift{
    
    team: Team;
    reports: Report[];
    stratShift: StartShift;
    endShift: EndShift;

    constructor(team: Team)
    {
        this.team = team;
        this.reports = [];
        this.stratShift= new StartShift();
        this.endShift = null;
    }

    public addReport(report: Report){
        this.reports.push(report);
        return true;
    }

    public initEndShift(filling:string){
        this.endShift = new EndShift(filling);
    }
}

class StartShift{
    date: Date;
    location: Location;

    constructor(){
        this.date = new Date();
        navigator.geolocation.getCurrentPosition((position)=>{
            this.location = new Location(position.coords.longitude, position.coords.latitude);

        }, (error)=>{
            console.log('position start shift error' + error.message);
        });
    }


}

class EndShift{
    date: Date;
    location: Location;
    filling: string;
    summary:string;

    constructor(filling:string){
        this.date = new Date();
        navigator.geolocation.getCurrentPosition((position)=>{
            this.location = new Location(position.coords.longitude, position.coords.latitude);

        }, (error)=>{
            console.log('position start shift error' + error.message);
        });

        this.filling = filling;
        this.summary=null;
    }
}