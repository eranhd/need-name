import { Component } from '@angular/core';
import { initializeApp } from 'firebase';
import { FirebaseService } from './service/firebase/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  showNav:boolean;
  constructor(){
    this.showNav = true;
  };

}
