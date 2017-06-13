import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { Location } from '../../../models/Location';
import { Observable } from 'rxjs';

@Component({
  selector: 'save-location-beta',
  templateUrl: './save-location-beta.component.html',
  styleUrls: ['./save-location-beta.component.scss']
})
export class SaveLocationBetaComponent implements OnInit {

  @Input() message = '';
  @Input() fixed = 0;
  name = '';
  title = 'שדה זה מופיע רק בגירסה ביטא';
  isSave: Observable<boolean>;
  isProcess: Observable<boolean>;

  constructor(public firebaseService: FirebaseService) {
    this.isSave = new Observable(observe => {
      observe.next(false);
      observe.complete()
    })
    this.isProcess = new Observable(observe => {
      observe.next(false);
      observe.complete()
    })
  }

  saveLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.isProcess = new Observable(observe => {
        observe.next(true);
        observe.complete()
      })
      const location = new Location(position.coords.longitude, position.coords.latitude);

      if (this.fixed != 0) {
        let fix: string = location.lat + '';
        location.lat = parseFloat(fix.slice(0, this.fixed));
        fix = location.lng + '';
        location.lng = parseFloat(fix.slice(0, this.fixed));
      }

      location.name = this.name;
      // console.log(location);
      this.firebaseService.saveLoacation(location);
      this.isProcess = new Observable(observe => {
        observe.next(false);
        observe.complete()
      })
      this.isSave = new Observable(observe => {
        observe.next(true);
        observe.complete()
      })

    }, error => {
      alert('אנא הפעל מיקום');
      this.isProcess = new Observable(observe => {
        observe.next(false);
        observe.complete()
      })
    });
  }

  ngOnInit() {
  }

}
