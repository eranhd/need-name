import { Location } from './Location';

export class Report {
    public date: Date;
    public location: Location;
    public summary: string;
    public fields: ReportField[];
    photoUrl: string;


    constructor(fields: ReportField[], summary: string, position: Position, photoUrl?:string) {
        this.date = new Date();

        if (summary)
            this.summary = summary;
        else
            this.summary = '';

        if (fields)
            this.fields = fields;
        else
            this.fields = [];
        this.location = new Location(position.coords.longitude, position.coords.latitude);
        if(photoUrl)
            this.photoUrl = photoUrl;
        else
            this.photoUrl = '';
    };

    public addFiled(name: string, data: string) {
        this.fields.push(new ReportField(name, data));
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




