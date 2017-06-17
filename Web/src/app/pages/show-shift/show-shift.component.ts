import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Shift } from '../../models/Shift';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { ShowReportComponent } from '../show-report/show-report.component';
import { Report } from '../../models/Report';
import {MapsComponent } from '../maps/maps.component';
import { Location } from '../../models/Location';


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
  reports: Report[]; //need to lead from firebase
  colds: Location[];
  hots: Report[];
  choosen: any = null; //init when report or spot choos
  coldSpotArr: Location[];
  hotSpotArr: Report[];
  reportsArr: Report[];

  constructor(public route: ActivatedRoute, public firebaseService: FirebaseService) {
 
    this.shift = {
  'coldSpotId' : [ '-KmDl2J3mpstECgPdqtm', '-KmDl2H3K25NmKIyRsMF', '-KmDhiNTwLsO4_7JGvHl', '-KmDes3KvxfN-2j7lBUJ', '-KmDensBBcfSBwSE4027' ],
  'endShift' : {
    'date' : '2017-06-09T21:37:30.723Z',
    'dilemmas' : '',
    'filling' : 'סבבה',
    'location' : {
      'lat' : 31.7238925,
      'lng' : 35.2205135
    },
    'summary' : '',
    'unusualEvents' : ''
  },
  'hotSpotId' : [ '-KmDU3cUhH2WNtXwG99Y' ],
  'reportsId' : [ '-KmDeydV5qBAJjOsHfHf' ],
  'stratShift' : {
    'date' : '2017-06-09T20:11:29.346Z',
    'location' : {
      'lat' : 31.7243562,
      'lng' : 35.2205931
    }
  },
  'team' : {
    'lead' : 'עידן',
    'members' : [ {
      'index' : 0,
      'name' : 'עידן'
    }, {
      'index' : 1,
      'name' : 'רותי'
    }, {
      'index' : 2,
      'name' : 'עופר'
    }, {
      'index' : 3,
      'name' : 'מתן'
    } ],
    'teamNum' : '2'
  }

}

    this.hotSpotArr=[];
    let hotSpot: Report;
    for(let i=0; i< firebaseService.hotSpots.length; i++) {
      hotSpot = this.firebaseService.getHotSpot(this.shift.hotSpotId[i]);
      
       if( hotSpot !=undefined){
         console.log(hotSpot);
        this.hotSpotArr.push(hotSpot);
       
       }
    }
    console.log(this.hotSpotArr);

    this.coldSpotArr=[];
    let coldSpot: Location;
    for(let i=0; i< firebaseService.coldSpots.length; i++) {
    coldSpot = this.firebaseService.getColdSpot(this.shift.coldSpotId[i]);
      
       if( coldSpot !=undefined){
        this.coldSpotArr.push(coldSpot);
       
       }
    }
    console.log(this.coldSpotArr);

    this.reportsArr=[];
    let report: Report;
    for(let i=0; i< firebaseService.reports.length; i++) {
    report = this.firebaseService.getReport(this.shift.reportsId[i]);
      
       if( report !=undefined){
        this.reportsArr.push(report);
       
       }
    }
    console.log(this.reportsArr);

}

    // this.sub = this.route.params.subscribe(params => {
    //   this.shift = this.firebaseService.getShift(params['id']);
    //   console.log(this.shift)
    //   this.id = params['id'];
    // });
    // this.isChoose = false;


  ngOnInit() {

  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
