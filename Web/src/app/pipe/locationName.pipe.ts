import { Pipe, PipeTransform } from "@angular/core";
import { Location } from "../models/Location";
import { FirebaseService } from "../service/firebase/firebase.service";

@Pipe({ name: "locationName" })

export class LocationName implements PipeTransform {
    min: number = -1;

    constructor(public fire: FirebaseService) {

    }

    transform(location: Location): string {
        let name = "מיקום לא ידוע";

        for (const loc of this.locations) {//loc is the key

            const num = this.checkDistance(loc["lat"], location.lat, loc["lng"], location.lng);
            if (this.min == -1 || this.min > num) {
                this.min = num;
                name = loc["name"];
            }
        }

        return name;
    }

    checkDistance(x1: number, x2: number, y1: number, y2: number) {
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

    locations = [
        {
            "lat": 31.6618,
            "lng": 35.1395,
            "name": "בית הכרם"
        },
        {
            "lat": 31.6618,
            "lng": 35.1395,
            "name": "בית הכרם"
        },
        {
            "lat": 31.7779666,
            "lng": 35.1855307,
            "name": "דומינוס פיצה"
        },
        {
            "lat": 31.7804699,
            "lng": 35.1880215,
            "name": "מאחורי קצפת"
        },
        {
            "lat": 31.7804349,
            "lng": 35.1886872,
            "name": "כיכר דניה"
        },
        {
            "lat": 31.7788058,
            "lng": 35.1950753,
            "name": "גן השחר"
        },
        {
            "lat": 31.7788058,
            "lng": 35.1950753,
            "name": "גן השחר"
        },
        {
            "lat": 31.7739345,
            "lng": 35.1915215,
            "name": "הגינה הקהילתית"
        },
        {
            "lat": 31.7698471,
            "lng": 35.1918204,
            "name": "גן השבשבת"
        },
        {
            "lat": 31.7698471,
            "lng": 35.1918204,
            "name": "גן השבשבת"
        },
        {
            "lat": 31.7733721,
            "lng": 35.1904049,
            "name": "גן השבשבת שליד ויצו"
        },
        {
            "lat": 31.7765442,
            "lng": 35.1885261,
            "name": "גן אביזוהר"
        },
        {
            "lat": 31.7765442,
            "lng": 35.1885261,
            "name": "גן אביזוהר"
        },
        {
            "lat": 31.7700384,
            "lng": 35.1907914,
            "name": "גן הנזיר ברחוב משה קול"
        },
        {
            "lat": 31.7745749,
            "lng": 35.1860014,
            "name": "גן הנזיר ברחוב משה קול"
        },
        {
            "lat": 32.9049,
            "lng": 35.5091,
            "name": "טיול צפון"
        },
        {
            "lat": 31.7196879,
            "lng": 35.2258773,
            "name": "רחוב דולגין"
        },
        {
            "lat": 31.7289177,
            "lng": 35.2174227,
            "name": "פארק זאלץ"
        },
        {
            "lat": 31.7289177,
            "lng": 35.2174227,
            "name": "פארק זאלץ"
        },
        {
            "lat": 31.7567,
            "lng": 35.1954,
            "name": "צומת פת"
        },
        {
            "lat": 31.7567889,
            "lng": 35.1954177,
            "name": "צומת פת"
        },
        {
            "lat": 31.7683,
            "lng": 35.1937,
            "name": "רמת בית הכרם"
        },
        {
            "lat": 31.7683097,
            "lng": 35.1937275,
            "name": "המכללה להנדסה"
        },
        {
            "lat": 31.7889,
            "lng": 35.2049,
            "name": "שערי העיר"
        },
        {
            "lat": 31.7873,
            "lng": 35.2043,
            "name": "משכנות האומה"
        },
        {
            "lat": 31.7855,
            "lng": 35.2088,
            "name": "שוקניון"
        },
        {
            "lat": 31.7563,
            "lng": 35.198,
            "name": "קטמונים"
        },
        {
            "lat": 31.7562235,
            "lng": 35.1980807,
            "name": "צומת פת"
        },
        {
            "lat": 31.7548267,
            "lng": 35.1943342,
            "name": "גבעת גונן"
        },
        {
            "lat": 31.7534485,
            "lng": 35.1954936,
            "name": "רחבת המכולות"
        },
        {
            "lat": 31.7534485,
            "lng": 35.1954936,
            "name": "רחבת המכולות"
        },
        {
            "lat": 31.7534485,
            "lng": 35.1954936,
            "name": "רחבת המכולות"
        },
        {
            "lat": 31.7534485,
            "lng": 35.1954936,
            "name": "רחבת המכולות"
        },
        {
            "lat": 31.7525153,
            "lng": 35.1939477,
            "name": "גן האוניה"
        },
        {
            "lat": 31.7606111,
            "lng": 35.1999056,
            "name": "עמק הצבאים"
        },
        {
            "lat": 31.7500719,
            "lng": 35.2000237,
            "name": "גן הדו לשוני"
        },
        {
            "lat": 31.7502262,
            "lng": 35.2020633,
            "name": "גן הדרקונים"
        },
        {
            "lat": 31.7537863,
            "lng": 35.2084822,
            "name": "גן נהוראי"
        },
        {
            "lat": 31.7682,
            "lng": 35.1937,
            "name": "רמת בית הכרם"
        },
        {
            "lat": 31.7249537,
            "lng": 35.2197731,
            "name": "מנהל קהילתי"
        },
        {
            "lat": 31.7272698,
            "lng": 35.2241517,
            "name": "באום"
        },
        {
            "lat": 31.7170127,
            "lng": 35.2309934,
            "name": "עמנואל זיסמן"
        },
        {
            "lat": 31.7197043,
            "lng": 35.2202956,
            "name": "מסוף אגד"
        },
        {
            "lat": 31.7201574,
            "lng": 35.2189625,
            "name": "וינגרטן"
        },
        {
            "lat": 31.7274825,
            "lng": 35.2160489,
            "name": "פארק זאלץ"
        },
        {
            "lat": 31.7689,
            "lng": 35.2085,
            "name": "בית הכרם"
        },
        {
            "lat": 31.7688328,
            "lng": 35.2065072,
            "name": "מתחם זיו"
        },
        {
            "lat": 31.7687825,
            "lng": 35.2062035,
            "name": "מתחם זיו"
        },
        {
            "lat": 31.766163,
            "lng": 35.2013152,
            "name": "גן השבשבת"
        },
        {
            "lat": 31.766163,
            "lng": 35.2013152,
            "name": "גן השחר"
        }, {
            "lat": 31.766163,
            "lng": 35.2013152,
            "name": "גן השחר"
        },
        {
            "lat": 31.7789316,
            "lng": 35.1822882,
            "name": "שבט צופים בית הכרם"
        }, {
            "lat": 31.778781,
            "lng": 35.1823956,
            "name": "שבט הצופים בית הכרם"
        },
        {
            "lat": 31.7769402,
            "lng": 35.1851442,
            "name": "תחנת רכבת קלה יד שרה"
        },
        {
            "lat": 31.7793894,
            "lng": 35.187313,
            "name": "בנק לאומי"
        },
        {
            "lat": 31.7798894,
            "lng": 35.1877639,
            "name": "קצפת"
        },
        {
            "lat": 31.7801827,
            "lng": 35.1886228,
            "name": "כיכר דניה"
        },
        {
            "lat": 31.7803887,
            "lng": 35.1877854,
            "name": "בנק דיסקונט"
        },
        {
            "lat": 31.7803557,
            "lng": 35.1878418,
            "name": "בנק דיסקונט"
        },
        {
            "lat": 31.7783391,
            "lng": 35.1930137,
            "name": "גן שחר ברחוב הגיא"
        },
        {
            "lat": 31.7765355,
            "lng": 35.1925306,
            "name": "גינה קהילתית"
        },
        {
            "lat": 31.7805174,
            "lng": 35.1941446,
            "name": "גן השחר מול בית ספר דרור"
        },
        {
            "lat": 31.7741799,
            "lng": 35.1916074,
            "name": "מתחם תעש"
        },
        {
            "lat": 31.7713804,
            "lng": 35.1913497,
            "name": "השבשבת הפנימית "
        },
        {
            "lat": 31.7668494,
            "lng": 35.1934324,
            "name": "גן הנזיר/פרצוף"
        },
        {
            "lat": 31.7725473,
            "lng": 35.1895031,
            "name": "שבשבת חיצונית"
        },
        {
            "lat": 31.7749082,
            "lng": 35.187635,
            "name": "מרכז מסחרי רמת בית הכרם"
        },
        {
            "lat": 31.772767,
            "lng": 35.1781108,
            "name": "יער ירושלים יד ושם"
        },
        {
            "lat": 31.7764906,
            "lng": 35.1805455,
            "name": "יער ירושלים גן אוסטרליה"
        },
        {
            "lat": 31.7756253,
            "lng": 35.1863799,
            "name": "מתחם זיו ומועדון הניצוץ "
        },
        {
            "lat": 31.7778715,
            "lng": 35.1853697,
            "name": "תחנת סונול סו גוד"
        }
    ]

}


