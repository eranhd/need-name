import { Component, OnInit, Input } from "@angular/core";
import { MapsService } from "../../service/maps/maps.service";
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral , SebmGoogleMapMarker} from "angular2-google-maps/core";
import { UserService } from "../../service/user/user.service";
import { ReportService } from "../../service/report/report.service";
import { Report } from "../../models/Report";
import { FirebaseService } from "../../service/firebase/firebase.service";
import { Location } from "../../models/Location";


@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"]
})
export class MapsComponent implements OnInit {
  zoom = 13;
  @Input() reports: Report[] = null;
  @Input() hot: Report[] = null;
  @Input() cold: Location[] = null;


  lat: number;
  lng: number;

  hotLable = "נקודות חמות";
  coldLable = "נקודות קרות";
  reportLable = "דוחות";
  showAllLabel = "הצג הכל";

  hotFlag = false;
  coldFlag= false;
  reportFlag = true;
  showAll = false;

  constructor(maps: MapsService,
              public userService: UserService,
              public reportService: ReportService,
              public firebseService: FirebaseService) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

    });
  }

  select(index: number){
    this.resetFlags();
    switch (index){
      case 1:
        this.reportFlag = true;
        break;
      case 2:
        this.hotFlag = true;
        break;
      case 3:
        this.coldFlag = true;
        break;
      case 4:
        this.showAll = true;
        break;
      default:
        this.reportFlag = true;
    }
  }

  resetFlags(){
    this.coldFlag = false;
    this.hotFlag = false;
    this.reportFlag = false;
    this.showAll = false;
  }

  ngOnInit() {
  }

}
