import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';

@Component({
  selector: 'app-mobile-spot',
  templateUrl: './mobile-spot.component.html',
  styleUrls: ['./mobile-spot.component.css']
})
export class MobileSpotComponent implements OnInit {

  constructor(public router:Router) {
    
}

  public buttonHotSpot(){
    this.router.navigate(['report']);
  }

   public buttonColdSpot(){
    
  }

  ngOnInit() {
  }

}
