import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Shift } from '../../models/Shift';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { ShowReportComponent } from '../show-report/show-report.component';
import { Report } from '../../models/Report';
import { MapsComponent } from '../maps/maps.component';
import { Location } from '../../models/Location';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-shift',
  templateUrl: './show-shift.component.html',
  // template: `<main></main>`,
  styleUrls: ['./show-shift.component.scss']
})
export class ShowShiftComponent implements OnInit, OnDestroy {

  isChoose: boolean;
  sub: any;
  shift: any;
  id: string;
  _reportChoose: Report;
  reports: Report[]; //need to lead from firebase
  colds: Location[];
  hots: Report[];
  choosen: any = null; //init when report or spot choos
  coldSpotArr: Location[];
  hotSpotArr: Report[];
  reportArr: Report[];
  showReport: Observable<boolean>;
  canShow: Observable<boolean>;



  constructor(public route: ActivatedRoute, public firebaseService: FirebaseService) {
    this.canShow = new Observable(observer => {
      observer.next(false);
      observer.complete();
    });
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log(this.id);
      this.shift = this.firebaseService.getShift(this.id);
      console.log(this.shift);
      

      this.hotSpotArr = [];
      let hotSpot: Report;
      if (this.shift.hotSpotId) {
        for (let i = 0; i < this.shift.hotSpotId.length; i++) {
          hotSpot = this.firebaseService.getHotSpot(this.shift.hotSpotId[i]);

          if (hotSpot != undefined) {
            // console.log(hotSpot);
            this.hotSpotArr.push(hotSpot);

          }
        }
        console.log(this.hotSpotArr);
      }


      // creating array of cold spots containing the cold spots of this shift:
      this.coldSpotArr = [];
      if (this.shift.coldSpotId) {
        let coldSpot: Location;
        for (let i = 0; i < this.shift.coldSpotId.length; i++) {
          coldSpot = this.firebaseService.getColdSpot(this.shift.coldSpotId[i]);

          if (coldSpot != undefined) {
            this.coldSpotArr.push(coldSpot);

          }
        }
        console.log(this.coldSpotArr);
      }
      // creating array of reports containing the reports of this shift: 
      this.reportArr = [];
      if (this.shift.reportsId) {
        let report: Report;
        for (let i = 0; i < this.shift.reportsId.length; i++) {
          report = this.firebaseService.getReport(this.shift.reportsId[i]);

          if (report != undefined) {
            this.reportArr.push(report);

          }
        }
        console.log(this.reportArr);
      }
      this.showReport = new Observable(observer => {
        observer.next(false);
        observer.complete();
      });
      this.canShow = new Observable(observer => {
        observer.next(true);
        observer.complete();
      });
      
    });


    // creating array of hot spots containing the hot spots of this shift:

  }


  get reportChoose() {
    return this._reportChoose;
  }
  set reportChoose(report: Report) {
    this.showReport = new Observable(observer => {
      observer.next(true);
      observer.complete();
    });
    this._reportChoose = report;
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
