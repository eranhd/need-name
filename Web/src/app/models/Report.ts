import { Team } from './Team';

export class Report{
    date:string;
    time:string;
    team:Team;
    location:string;
    title:string;

    constructor(date:Date, team:Team, title?:string){
        this.date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        this.time = date.getHours() + ':' + date.getMinutes();
        this.location = 'ירושלים';
        this.team = team;
        if(title)
            this.title = title;
        else    
            this.title = '';
    };


    public setTitle(str){
        this.title = str;
    }

    public getSummary(){
        var str = 'בתאריך ' + this.date + ', שעה' + this.time;
        str +=  "ב" + this.location;
        str += ', ' + this.title;
        return str;
    }
}