import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-main',
  templateUrl: './mobile-main.component.html',
  styleUrls: ['./mobile-main.component.css']
})
export class MobileMainComponent implements OnInit {

  public hotPressed:boolean;
  constructor(public router:Router) {
    this.hotPressed = false;
}

  public buttonAddReport(){
    this.router.navigate(['report']);
  }

  public buttonPointPressed(){
    this.hotPressed = true;
  }

  public buttonPointUnpressed(){
    this.hotPressed = false;
  }

  ngOnInit() {
  }

}
