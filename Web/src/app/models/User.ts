import { Shift } from './Shift';
import { Location } from './Location';

//this models will describe user class.
export class User {

    details: Details;
    shiftsId: string[];
    
    shifts: Shift[];
    // thisShift:Shift;
    // coldSpot:Location;
    //coldSpotArr: Location[];


    constructor(user?: User) {
        if (user) {//copy constructor
            this.shifts = [];

            // if (user.shifts) {
            //     for (let shift of user.shifts)
            //         this.shifts.push(new Shift(shift.stratShift.location, shift.team, shift));
            // }
            // this.locations.push(new Location(location.));   
            if (user.shiftsId) {
                this.shiftsId = user.shiftsId;
            }
            else {
                this.shiftsId = [];
            }
            
            this.details = new Details(user.details);

        }
        else {
            this.details = new Details();
            this.shifts = [];
            this.shiftsId = [];
            
        }
    }

    addShift(shift: Shift, shiftId?: string) {
        if (shiftId)
            this.shiftsId.unshift(shiftId);
        this.details.lastShift = new Date();
    }

    updateLastShift(shift: Shift) {
        
        this.shifts[this.shifts.length - 1] = shift;
        
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
                this._sons = [];
            this.numOfReport = detail.numOfReport;
            this.lastShift = detail.lastShift;
        }
        else {
            this.name = '';
            // this.role = new Role(1, 'admin');
            this.area = 'jerusalem';
            this._sons = [];
            this.numOfReport = 0;
            this.lastShift = new Date();
        }

    }

    set_role (type: number, name: string){
        this.role = new Role(type, name);
    }

    public addSon(son: string) {
        if(!this._sons)
            this._sons = [];
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
        if(type != 1 && type != 2 && type != 3 && type != 4) {
                alert("סוג תפקיד לא קיים");
        }
        else{
             this.type = type;
        }

        if(name != 'parentPatrol' && name != 'dtPatrol') {
                alert("שם תפקיד לא קיים");
        }
        else {
            this.name = name;
        }    
    }
    
    public canDirect(path) {
        // 1 doesnt have any web page Permission:
        if (this.type == 1 && path == 'main'){
            return false;
        }

        // 2 doesnt have settingReport web page Permission:
        if(this.type == 2 && path == 'settingReport') {
            return false;
        }

        // 3 and 4 have all web page Permissions:
        return true;
    }
};