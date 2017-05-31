import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { Location } from '../../../models/Location';

@Component({
  selector: 'save-location-beta',
  templateUrl: './save-location-beta.component.html',
  styleUrls: ['./save-location-beta.component.scss']
})
export class SaveLocationBetaComponent implements OnInit {

  @Input() message: string = '';
  @Input() fixed: number = 0;
  name: string = '';
  title: string = 'שדה זה מופיע רק בגירסה ביטא';
  constructor(public firebaseService: FirebaseService) {
    
   }

  saveLocation(){
    navigator.geolocation.getCurrentPosition(position=>{
      let location = new Location(position.coords.longitude, position.coords.latitude);
      
      if(this.fixed != 0){
        let fix: string = location.lat + '';
        location.lat =  parseFloat(fix.slice(0, this.fixed));
        fix = location.lng + '';
        location.lng =  parseFloat(fix.slice(0, this.fixed));
      }      
      
      location.name = this.name;
      console.log(location);
      this.firebaseService.saveLoacation(location);
      
    }, error=>{
      alert('אנא הפעל מיקום');
    });
  }

  ngOnInit() {
  }

}
