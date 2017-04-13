import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-main',
  templateUrl: './mobile-main.component.html',
  styleUrls: ['./mobile-main.component.css']
})
export class MobileMainComponent implements OnInit {

  private hotPressed:boolean;
  constructor(private router:Router) {
    this.hotPressed = false;
}

  private buttonAddReport(){
    this.router.navigate(['report']);
  }

  private buttonPointPressed(){
    this.hotPressed = true;
  }

  private buttonPointUnpressed(){
    this.hotPressed = false;
  }

  ngOnInit() {
  }

}
