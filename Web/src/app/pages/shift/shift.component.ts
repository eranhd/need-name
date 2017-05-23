import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../service/firebase/firebase.service';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  
  constructor(public firebseService: FirebaseService) { }

  ngOnInit() {
    
  }

}
