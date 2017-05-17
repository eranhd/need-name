import { Shift } from './Shift';


//this models will describe user class.
export class User {

    details: Details;
    shifts: Shift[];


    constructor(user?: User) {
        if (user) {
            this.details = user.details;
            this.shifts = user.shifts;
        }
        else {
            this.details = new Details();
            this.shifts = [];
        }
    }

    addShift(shift: Shift){
        this.shifts.push(shift);
    }

    updateLastShift(shift: Shift){
        this.addShift(shift);//need to delete
        this.shifts[this.shifts.length -1] = shift;
    }



};



export class Details {
    name: string;
    role: Role;
    area: string;
    _sons: string[];
    numOfReport: number;
    lastShift: Date;

    constructor(){
        this.name= '';
        this.role = new Role(1, 'admin');
        this.area = 'jerusalem';
        this._sons = [];
        this.numOfReport = 0;
        this.lastShift = new Date();
    }
    public addSon(son: string) {
        this._sons.push(son);
    }

    get son() {
        return this._sons;
    }
}

export class Role {

    private type: number;
    private name: string;


    constructor(type: number, name: string) {
        this.type = type;
        this.name = name;
    };

    public canDirect(path) {

    }
};