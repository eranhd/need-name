import { Shift } from './Shift';
import { Location } from './Location';

//this models will describe user class.
export class User {

    details: Details;
    shifts: Shift[];
    // thisShift:Shift;
    // coldSpot:Location;
    //coldSpotArr: Location[];


    constructor(user?: User) {
        if (user) {//copy constructor
            this.shifts = [];

            if (user.shifts) {
                for (let shift of user.shifts)
                    this.shifts.push(new Shift(shift.team, shift));
            }
            // this.locations.push(new Location(location.));   

            this.details = new Details(user.details);

        }
        else {

            this.details = new Details();
            this.shifts = [];
            // this.coldSpotArr = [];
            // this.coldSpot=null;
        }
    }

    addShift(shift: Shift) {
        this.shifts.push(shift);
        this.details.lastShift = new Date();
    }

    updateLastShift(shift: Shift) {
        // this.addShift(shift);//need to delete
        this.shifts[this.shifts.length - 1] = shift;
        //this.thisShift=shift;
    }

    addColdSpot(coldSpot: Location) {
        // navigator.geolocation.getCurrentPosition((position) => {
        // this.coldSpot = new Location(position.coords.longitude, position.coords.latitude);
        // this.coldSpotArr.push(coldSpot);
        // }, (error) => {
        //  alert('אנא הפעל מיקום');
        // });
    }
}


export class Details {
    name: string;
    role: Role;
    area: string;
    _sons: string[];
    numOfReport: number;
    lastShift: Date;

    constructor(detail?: Details) {
        if (detail) {
            this.name = detail.name;
            this.role = new Role(detail.role.type, detail.role.name);
            this.area = detail.area;
            if (this._sons)
                this._sons = detail._sons;
            else
                this._sons = null;
            this.numOfReport = detail.numOfReport;
            this.lastShift = detail.lastShift;
        }
        else {
            this.name = '';
            this.role = new Role(1, 'admin');
            this.area = 'jerusalem';
            this._sons = [];
            this.numOfReport = 0;
            this.lastShift = new Date();
        }

    }
    public addSon(son: string) {
        this._sons.push(son);
    }

    get son() {
        return this._sons;
    }
}

export class Role {

    type: number;
    name: string;


    constructor(type: number, name: string) {
        this.type = type;
        this.name = name;
    }

    public canDirect(path) {

    }
};