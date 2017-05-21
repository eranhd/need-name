import { Team } from './Team';
import { Report } from './Report';
import { Location } from './Location';

export class Shift {

    team: Team;
    reports: Report[];
    stratShift: StartShift;
    endShift: EndShift;

    constructor(team: Team, shift?: Shift) {
        if (shift) {
            this.team = team;
            if(shift.reports)
                this.reports = shift.reports;
            else
                this.reports = [];
            this.stratShift = shift.stratShift;
            if(this.endShift)
                this.endShift = shift.endShift;
            else
                this.endShift = null;
        }
        else {

            this.team = team;
            this.reports = [];
            this.stratShift = new StartShift();
            this.endShift = null;
        }
    }

    public addReport(report: Report) {
        this.reports.push(report);
        return true;
    }

    public initEndShift(filling: string) {
        this.endShift = new EndShift(filling);
    }
}

class StartShift {
    date: Date;
    location: Location;

    constructor() {
        this.date = new Date();
        navigator.geolocation.getCurrentPosition((position) => {
            this.location = new Location(position.coords.longitude, position.coords.latitude);

        }, (error) => {
            console.log('position start shift error' + error.message);
        });
    }


}

class EndShift {
    date: Date;
    location: Location;
    filling: string;

    constructor(filling: string) {
        this.date = new Date();
        navigator.geolocation.getCurrentPosition((position) => {
            this.location = new Location(position.coords.longitude, position.coords.latitude);

        }, (error) => {
            console.log('position start shift error' + error.message);
        });

        this.filling = filling;
    }
}