import { Component, OnInit, Input } from '@angular/core';
import { MapsService } from '../../service/maps/maps.service';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral , SebmGoogleMapMarker} from 'angular2-google-maps/core';
import { UserService } from '../../service/user/user.service';
import { ReportService } from '../../service/report/report.service';
import { Report } from '../../models/Report';
import { FirebaseService } from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  zoom: number = 13;
  @Input() reports: Report[];
  // reports:Report[];
  lat: number;
  lng: number;

  constructor(maps:MapsService, 
              public userService:UserService,
              public reportService:ReportService,
              public firebseService: FirebaseService) { 
    
    // this.reports = this.reportService.getLastReportArr();
    
    var that = this;
    
    navigator.geolocation.getCurrentPosition((position)=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      
    });

    
  
    
  }

  ngOnInit() {
  }

}
