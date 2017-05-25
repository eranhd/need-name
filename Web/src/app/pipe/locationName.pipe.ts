import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../models/Location';

@Pipe({name : 'locationName'})

export class LocationName implements PipeTransform{
    transform(location: Location): string{
        // console.log(location);
        console.log( this.fixNumber(location.lat, 3) + ', ' + this.fixNumber(location.lng, 3) + ';')
        let name = 'מיקום לא ידוע';
        
        if(this.fixNumber(location.lat, 0) == 31 && this.fixNumber(location.lng, 0) == 35){
            name = 'ירושלים';

            if( ( this.fixNumber(location.lat, 3) == 31.756) && ( this.fixNumber(location.lng, 3) == 35.195) )
            name = 'צומת פת';
        }
        if(this.fixNumber(location.lat, 0) == 32 && this.fixNumber(location.lng, 0) == 34){
            name = 'מעלה אדומים';
        }
        return name;
    }

    fixNumber(num : number , fix: number):number{
        // console.log(parseInt(num.toFixed(fix)) - Math.pow(10, -fix));
        if(num < parseFloat(num.toFixed(fix)))//its mean that round up
            return parseFloat(num.toFixed(fix)) - Math.pow(10, -fix);
        else
            return parseFloat(num.toFixed(fix));
    }
}