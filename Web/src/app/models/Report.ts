import { Team } from './Team';

export class Report{

    private id:string;
    private date:string;
    private time:string;
    private team:Team;
    private location:string;
    public title:string;
    private fields:ReportField[];

    constructor(date:Date, team?:Team, title?:string, fields?:ReportField[]){
        this.date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        this.time = date.getHours() + ':' + date.getMinutes();
        this.location = 'ירושלים';
        if(team)
            this.team = team;
        else{
            this.team = new Team();
        }

        if(title)
            this.title = title;
        else    
            this.title = '';
        
        if(fields)
            this.fields = fields;
        else
            this.fields = [];
        this.id = '5';
    };

    public addFiled(field?:ReportField, name?:string, data?:string){
        if(!field)
            this.fields.push(new ReportField(name, data));
        else
            this.fields.push(field);
    }

    public setTitle(str){
        this.title = str;
    }

    
    public getdate() : string {
        return this.date;
    }

    
    public gettime() : string {
        return this.time;
    }

    
    public getlocation() : string {
        return this.location;
    }
    
    

    public getSummary(){
        var str = 'בתאריך ' + this.date + ', שעה' + this.time;
        str +=  "ב" + this.location;
        str += ', ' + this.title;
        return str;
    }
}


export class ReportField{

    constructor(public name:string,
                public data:string){

                }
    public toString(){
        return this.name + ': ' + this.data;
    }
}