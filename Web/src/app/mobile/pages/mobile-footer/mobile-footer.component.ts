import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.css']
})
export class MobileFooterComponent implements OnInit {

  copyRight: string = 'כל הזכויות שמורות, version beta 1.04';
  constructor() { }

  ngOnInit() {
  }

}
