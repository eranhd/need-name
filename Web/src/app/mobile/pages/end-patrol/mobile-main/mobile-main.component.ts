import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';


@Component({
  selector: 'app-mobile-main',
  templateUrl: './mobile-main.component.html',
  styleUrls: ['./mobile-main.component.css']
})
export class MobileMainComponent implements OnInit {

  constructor(public router:Router) {
    
}

  public buttonAddReport(){
    this.router.navigate(['report']);
  }

 public buttonStartPatrol(){
    this.router.navigate(['start_pattrol']);
 }

  public buttonAddSpot(){
    this.router.navigate(['mobile_spot']);

  }

  ngOnInit() {
  }

}