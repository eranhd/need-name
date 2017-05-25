import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { Shift } from '../../models/Shift';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { ShowReportComponent } from '../show-report/show-report.component';
import { Report } from '../../models/Report';

@Component({
  selector: 'app-show-shift',
  templateUrl: './show-shift.component.html',
  styleUrls: ['./show-shift.component.scss']
})
export class ShowShiftComponent implements OnInit, OnDestroy  {

  isChoose: boolean;
  sub: any;
  shift: Shift;
  id: number;
  reportChoose: Report;
  constructor(public route: ActivatedRoute, public firebaseService:FirebaseService) { 
    this.sub = this.route.params.subscribe(params => {     
      this.shift =  firebaseService.shifts[params['id']];
      this.id = params['id'];
    });
    this.isChoose = false;
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
