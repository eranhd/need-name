import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
export class ShowShiftComponent implements OnInit, OnDestroy {

  isChoose: boolean;
  sub: any;
  shift: any;
  id: number;
  reportChoose: Report;


  constructor(public route: ActivatedRoute, public firebaseService: FirebaseService) {
    this.shift = {
      "endShift" : {
        "date" : "2017-06-01T20:24:58.320Z",
        "dilemmas" : "",
        "filling" : "",
        "location" : {
          "lat" : 31.7699977,
          "lng" : 35.1909203
        },
        "summary" : "",
        "unusualEvents" : ""
      },
      "stratShift" : {
        "date" : "2017-06-01T20:04:35.939Z",
        "location" : {
          "lat" : 31.776003,
          "lng" : 35.1861585
        }
      },
      "team" : {
        "lead" : "אורן ",
        "members" : [ {
          "index" : 0,
          "name" : "2"
        }, {
          "index" : 1,
          "name" : "1"
        }, {
          "index" : 2,
          "name" : "4"
        }, {
          "index" : 3,
          "name" : "45"
        } ],
        "teamNum" : "5"
      }
    }
    // this.sub = this.route.params.subscribe(params => {
    //   this.shift = this.firebaseService.getShift(params['id']);
    //   console.log(this.shift)
    //   this.id = params['id'];
    // });
    // this.isChoose = false;
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
