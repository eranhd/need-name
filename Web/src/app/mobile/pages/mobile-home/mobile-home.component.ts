import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftService } from '../../../service/shift/shift.service';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.css']
})
export class MobileHomeComponent implements OnInit {

  constructor(public router: Router,
            public shiftService: ShiftService) { }

  ngOnInit() {

  }

}
