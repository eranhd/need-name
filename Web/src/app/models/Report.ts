import { Location } from './Location';

export class Report {
    public date: string;
    public dateToShow: Date;
    public location: Location;
    public summary: string;
    public fields: ReportField[];
    photoUrl: string;


    constructor(fields: ReportField[], summary: string, position: Position, photoUrl?: string) {

        // this.date = JSON.stringify(new Date());
        this.date = (new Date()).toString();
        //console.log(this.date);
        if (summary)
            this.summary = summary;
        else
            this.summary = '';

        if (fields)
            this.fields = fields;
        else
            this.fields = [];
        if(position)
            this.location = new Location(position.coords.longitude, position.coords.latitude);
        if (photoUrl)
            this.photoUrl = photoUrl;
        else
            this.photoUrl = '';
    };

    public addFiled(name: string, data: string) {
        this.fields.push(new ReportField(name, data));
    }

    public getDate() {
        return new Date(this.date);
    }

    public clone(report: Report) {
        /*public date:string;
    public dateToShow: Date;
    public location: Location;
    public summary: string;
    public fields: ReportField[];
    photoUrl: string; */

        this.date = report.date;
        this.location = report.location;
        this.summary = report.summary;
        this.fields = report.fields;
        this.photoUrl = report.photoUrl;
    }

}


export class ReportField {

    constructor(public name: string,
        public data: string) {

    }

    public toString() {
        return this.name + ': ' + this.data;
    }
}

