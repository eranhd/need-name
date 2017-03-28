import { Injectable } from '@angular/core';

@Injectable()
export class MapsService {

  lat:number;
  lng:number;
  constructor() {
    this.lat = 0;
    this.lng = 0;
   }

  public setPosition(position:Position){
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }
}
