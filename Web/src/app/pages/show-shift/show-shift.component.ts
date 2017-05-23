import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { Shift } from '../../models/Shift';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-show-shift',
  templateUrl: './show-shift.component.html',
  styleUrls: ['./show-shift.component.css']
})
export class ShowShiftComponent implements OnInit, OnDestroy  {

  sub: any;
  shift: Shift;
  constructor(public route: ActivatedRoute, public firebaseService:FirebaseService) { 
    this.sub = this.route.params.subscribe(params => {     
      this.shift =  firebaseService.shifts[params['id']];
    });
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
