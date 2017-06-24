import { Pipe, PipeTransform } from "@angular/core";
import { Location } from "../models/Location";
import { FirebaseService } from "../service/firebase/firebase.service";

@Pipe({ name: "locationName" })

export class LocationName implements PipeTransform {
    min: number = -1;

    constructor(public fire: FirebaseService){

    }
    transform(location: Location): string {
        let name = "מיקום לא ידוע";

        for (const loc of this.fire.locations) {//loc is the key

            const num = this.checkDistance(loc["lat"], location.lat, loc["lng"], location.lng);
            if (this.min == -1 || this.min > num)
            {
                this.min = num;
                name = loc["name"];
            }
        }

        return name;
    }

    checkDistance(x1: number, x2: number, y1: number, y2: number){
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    isArea(lat: number, lng: number, location, fix: number): boolean {
        if (fix == 0) {
            if (this.fixNumber(location.lat, 0) == lat && this.fixNumber(location.lng, 0) == lng)
                return true;
        }
        else
            for (let i = fix; i > fix - 3; i--)
                if (this.fixNumber(location.lat, i) == this.fixNumber(lat, i) && this.fixNumber(location.lng, i) == this.fixNumber(lng, i))
                    return true;
        return false;
    }

    fixNumber(num: number, fixed: number): number {
        fixed += 3;
        const fix: string = num + "";
        num = parseFloat(fix.slice(0, fixed));
        return num;
    }
}
