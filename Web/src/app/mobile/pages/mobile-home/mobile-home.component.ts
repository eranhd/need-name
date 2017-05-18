import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.css']
})
export class MobileHomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

}
