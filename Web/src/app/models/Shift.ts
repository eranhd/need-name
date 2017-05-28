import { Team } from './Team';
import { Report } from './Report';
import { Location } from './Location';

export class Shift {

    team: Team;
    reports: Report[];
    reportsId: string[];
    coldSpotArr: Location[];
    hotSpotArr:Report[];
    stratShift: StartShift;
    endShift: EndShift;
    isHotSpot:boolean;

    constructor(team: Team, shift?: Shift) {
        if (shift) {
            this.team = team;
            if(shift.reports){
                this.reports = shift.reports; 
            }
            else{
                this.reports = [];  
            }
            if(shift.coldSpotArr){
                 this.coldSpotArr=shift.coldSpotArr;
            }
            else{
                this.coldSpotArr =[];
            }
            if(shift.hotSpotArr)
            { this.hotSpotArr=shift.hotSpotArr;}
            else
            { this.hotSpotArr =[];}

            this.stratShift = new StartShift(shift.stratShift);
            if(this.endShift)
                this.endShift = shift.endShift;
            else
                this.endShift = null;
            if(shift.reportsId)
                this.reportsId = shift.reportsId;
            else
                this.reportsId = [];
        }
        else {

            this.team = team;
            this.reports = [];
            this.hotSpotArr =[];
            this.coldSpotArr =[];
            this.stratShift = new StartShift();
            this.endShift = null;
            this.isHotSpot=false;
            this.reportsId = [];
        }
    }

    public addReport(report: Report, id: number, reportId?:string) {
        if(reportId)
            this.reportsId.unshift(reportId);
        // if(id === 2){
        //     this.hotSpotArr.push(report);
        //     return true
        // }
        // else{
        //     this.reports.push(report);
        //     return true
        // }        
    }

    public initEndShift(filling: string, position?: Position) {
        this.endShift = new EndShift(filling, position);
    }

     addColdSpot(coldSpot:Location){
        this.coldSpotArr.push(coldSpot);
     }

     addHotSpot(hotSpot:boolean){
            this.isHotSpot = hotSpot;
     }
}

class StartShift {
    date: Date;
    location: Location;

    constructor(shift?: StartShift) {
        if(shift){
            this.date = shift.date;
            if(shift.location)
                this.location = shift.location;
            else
                this.location = null;
        }
        else{
            
        this.date = new Date();
        navigator.geolocation.getCurrentPosition((position) => {
            this.location = new Location(position.coords.longitude, position.coords.latitude);

        }, (error) => {
            console.log('position start shift error' + error.message);
        });
        }
    }


}

class EndShift {
    date: Date;
    location: Location;
    filling: string;
    summary:string;
    unusualEvents:string;
    dilemmas:string;

    constructor(filling: string, position?:Position) {

        this.filling = filling;
        this.summary='';
        this.dilemmas='';
        this.unusualEvents='';

        this.date = new Date();
        if(position){
            this.location = new Location(position.coords.longitude, position.coords.latitude);
        }
        else
        {
            navigator.geolocation.getCurrentPosition((position) => {
            this.location = new Location(position.coords.longitude, position.coords.latitude);
        }, (error) => {
            console.log('position start shift error' + error.message);
        });
        }
        
 
    }
}