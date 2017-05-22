import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';

@Component({
  selector: 'app-mobile-spot',
  templateUrl: './mobile-spot.component.html',
  styleUrls: ['./mobile-spot.component.css']
})
export class MobileSpotComponent implements OnInit {

  img;
  constructor(public router: Router, private element: ElementRef) {

  }

  public buttonHotSpot(){
    this.router.navigate(['report']);
    
  }

  public buttonColdSpot() {

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
