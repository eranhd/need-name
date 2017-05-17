import { Shift } from './Shift';


//this models will describe user class.
export class User{

    details: Details;
    shifts: Shift[];

    


};



export class Details{
    id:string;
    name:string;
    photoUrl:string;
    role:Role;
    area: string;
    _sons:string[];
    numOfReport: number;
    lastShift: Date;

    public addSon(son:string){
        this._sons.push(son);
    }

    get son(){
        return this._sons;
    }
}

export class Role{

    private type:number;
    private name:string;
    

    constructor(type:number, name:string){
        this.type = type;
        this.name = name;
    };

    public canDirect(path){
        
    }
};