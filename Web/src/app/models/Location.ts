export class Location {

    name: string;
    date: String;
    constructor(public lng, public lat) {


    }

    public getLocationName(): string {
        let name = "ירושלים";
        if (this.lat > 31.7683967 - 0.001 && this.lat < 31.7683967 + 0.001 && this.lng > 35.1938181 - 0.001 && this.lng < 35.1938181 + 0.001)
            name = "רמת בית הכרם";
        return name;
    }
}
