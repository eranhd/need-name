import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';
import { Location } from 'app/models/Location';
import { UserService } from '../../../service/user/user.service';
import { ShiftService } from '../../../service/shift/shift.service';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { LocalStorageService } from '../../../service/local-storage/local-storage.service';
@Component({
  selector: 'app-mobile-spot',
  templateUrl: './mobile-spot.component.html',
  styleUrls: ['./mobile-spot.component.css']
})
export class MobileSpotComponent implements OnInit {
  public location: Location;
  public isHotSpot:boolean;
  img;
  constructor(public router: Router,
              private element: ElementRef,
              public userService: UserService,
              public firebaseService: FirebaseService,
               public shiftService: ShiftService) {

  }

  /*public buttonHotSpot(){
    let shifrLenght=this.userService.user.shifts.length;
    this.userService.user.shifts[shifrLenght-1].addHotSpot(true);
    
   // this.router.navigate(['mobile_main/report']);
    
  }*/

  public buttonColdSpot() {
   navigator.geolocation.getCurrentPosition((position) => {
   this.location = new Location(position.coords.longitude, position.coords.latitude);
    let shifrLenght=this.userService.user.shifts.length;
  this.userService.user.shifts[shifrLenght-1].addColdSpot(this.location);
    }, (error) => {
      alert('אנא הפעל מיקום');
    });
    this.userService.user.updateLastShift(this.shiftService.shift);
    this.firebaseService.updateUser(this.userService.user);
    LocalStorageService.saveUser(this.userService.user);
    this.router.navigate(['mobile_main']);
  }

  getImage(event) {
    var reader = new FileReader();
    var image = this.element.nativeElement.querySelector('.image');

    reader.onload = function (event: ProgressEvent) {
      var src = event.target;
      image.src = src['result'];
      firebase.storage().ref('spotImage/').putString(src['result'], 'data_url', {
        contentType: 'image/jpeg'
      }).then((snapshot) => {
        console.log('image saved' + snapshot);
      })

    };



    reader.readAsDataURL(event.target.files[0]);
  }

  ngOnInit() {
  }

}
