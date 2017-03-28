import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../service/maps/maps.service';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  private title: string = 'My first angular2-google-maps project';
  /*private lat:number;
  private lng:number;*/

  lat: number = 0;
  lng: number = 0;
  zoom: number = 10;
  paths: Array<LatLngLiteral> = [
    { lat: 0,  lng: 10 },
    { lat: 0,  lng: 20 },
    { lat: 10, lng: 20 },
    { lat: 10, lng: 10 },
    { lat: 0,  lng: 10 }
  ]
  // Nesting paths will create a hole where they overlap;
  nestedPaths: Array<Array<LatLngLiteral>> = [[
    { lat: 0,  lng: 10 },
    { lat: 0,  lng: 20 },
    { lat: 10, lng: 20 },
    { lat: 10, lng: 10 },
    { lat: 0,  lng: 10 }
  ], [
    { lat: 0, lng: 15 },
    { lat: 0, lng: 20 },
    { lat: 5, lng: 20 },
    { lat: 5, lng: 15 },
    { lat: 0, lng: 15 }
  ]];
  constructor(maps:MapsService) { 
    var that = this;
    navigator.geolocation.getCurrentPosition(function(position){
      that.lat = position.coords.latitude;
      that.lng = position.coords.longitude;
    });
  
    
  }

  ngOnInit() {
  }

}
