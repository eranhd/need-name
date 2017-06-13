import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../models/Location';
import { FirebaseService } from '../service/firebase/firebase.service';

@Pipe({ name: 'locationName' })

export class LocationName implements PipeTransform {
    min: number = -1;

    constructor(public fire: FirebaseService){

    }
    transform(location: Location): string {
        let name = 'מיקום לא ידוע';

        if (this.isArea(31, 35, location, 0))
            name = 'ירושלים';
        if (this.isArea(31.7566, 35.1955, location, 4))
            name = 'צומת פת';
        if (this.isArea(31.7533, 35.2146, location, 4))
            name = 'תלפיות';
        if (this.isArea(31.6618, 35.1395, location, 4))
            name = 'בית הכרם';
        if (this.isArea(31.7779666, 35.1855307, location, 7))
            name = 'דומינוס פיצה';
        if (this.isArea(31.7804699, 35.1880215, location, 7))
            name = 'מאחורי קצפת';
        if (this.isArea(31.7804349, 35.1886872, location, 7))
            name = 'כיכר דניה';
        if (this.isArea(31.7788058, 35.1950753, location, 7))
            name = 'גן שחר';
        if (this.isArea(31.7739345, 35.1915215, location, 7))
            name = 'הגינה הקהילתית';
        if (this.isArea(31.7698471, 35.1918204, location, 7))
            name = 'גן השבשת';
        if (this.isArea(31.7733721, 35.1904049, location, 7))
            name = 'גן השבשהת שליד ויצו';
        if (this.isArea(31.7765442, 35.1885261, location, 7))
            name = 'גן אביזהר';
        if (this.isArea(31.7700384, 35.1907914, location, 7))
            name = 'גן הנזיר ברחוב משה קול';
        if (this.isArea(31.7745749, 35.1860014, location, 7))
            name = 'גן הנזיר ברחוב משה קול';


        //generali..
        const data = {
             '-aa': {
                'lat': 31.7566,
                'lng': 35.1955,
                'name': 'צומת פת'
            },
            '-KlZjRuvRaNK8X9sS1Nc': {
                'lat': 31.6618,
                'lng': 35.1395,
                'name': 'בית הכרם'
            },
            '-KlZjXgUQ_0UfRocqhoi': {
                'lat': 31.6618,
                'lng': 35.1395,
                'name': 'בית הכרם'
            },
            '-KleQOFdPkyhUANzyW1-': {
                'lat': 31.7779666,
                'lng': 35.1855307,
                'name': 'דומינוס פיצה'
            },
            '-KleSMbyT7hbrlWqf6Db': {
                'lat': 31.7804699,
                'lng': 35.1880215,
                'name': 'מאחורי קצפת'
            },
            '-KleUkbJXZocYkXk0hYZ': {
                'lat': 31.7804349,
                'lng': 35.1886872,
                'name': 'כיכר דניה'
            },
            '-KleZ0FLFfmxnndP6X-B': {
                'lat': 31.7788058,
                'lng': 35.1950753,
                'name': 'גן השחר'
            },
            '-KleZ8u4tVQ8w581Uzlc': {
                'lat': 31.7788058,
                'lng': 35.1950753,
                'name': 'גן השחר'
            },
            '-KlebMMHkMaLv4n07uPu': {
                'lat': 31.7739345,
                'lng': 35.1915215,
                'name': 'הגינה הקהילתית'
            },
            '-KledUs2WLQEAXE811Zn': {
                'lat': 31.7698471,
                'lng': 35.1918204,
                'name': 'גן השבשבת'
            },
            '-KledZ9BIMmL_gCV6kay': {
                'lat': 31.7698471,
                'lng': 35.1918204,
                'name': 'גן השבשבת'
            },
            '-KlegvpXsQIoqUq6vJGt': {
                'lat': 31.7733721,
                'lng': 35.1904049,
                'name': 'גן השבשבת שליד ויצו'
            },
            '-Klek_l89j_ywsQLagDo': {
                'lat': 31.7765442,
                'lng': 35.1885261,
                'name': 'גן אביזוהר'
            },
            '-Kleka5OSd_8sSR5YPYP': {
                'lat': 31.7765442,
                'lng': 35.1885261,
                'name': 'גן אביזוהר'
            },
            '-KlepFFVTTjufoS6UiMN': {
                'lat': 31.7700384,
                'lng': 35.1907914,
                'name': 'גן הנזיר ברחוב משה קול'
            },
            '-Klepbo7MB8J2Wg1pvEI': {
                'lat': 31.7745749,
                'lng': 35.1860014,
                'name': 'גן הנזיר ברחוב משה קול'
            },
            '-Km5gecQtYjEggHJ7keh': {
                'lat': 32.9049,
                'lng': 35.5091,
                'name': 'טיול צפון'
            },
            '-KmDhhtTqogSNkIwvOm0': {
                'lat': 31.7196879,
                'lng': 35.2258773,
                'name': 'רחוב דולגין'
            },
            '-KmDl2H1tHPmyZtuNaT8': {
                'lat': 31.7289177,
                'lng': 35.2174227,
                'name': 'פארק זאלץ'
            },
            '-KmDl2IuO-zJsWmctg0W': {
                'lat': 31.7289177,
                'lng': 35.2174227,
                'name': 'פארק זאלץ'
            }
        }


        for (const loc of this.fire.locations) {//loc is the key

            const num = this.checkDistance(loc['lat'], location.lat, loc['lng'].lng, location.lng);
            if (this.min == -1 || this.min > num)
            {
                this.min = num;
                name = loc['name'];
            }

            // if (this.isArea(data[loc].lat, data[loc].lng, location, (data[loc].lng + '').length - 3))
            //     name = data[loc].name;
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
        const fix: string = num + '';
        num = parseFloat(fix.slice(0, fixed));
        return num;
    }
}
