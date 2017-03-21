import { Component } from '@angular/core';
import { initializeApp } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){

    var config = {
    apiKey: "AIzaSyAOpMbZqfS8nVvrC-BoPGP-UAmuJdFyLzE",
    authDomain: "anti-drugs-jerusalem.firebaseapp.com",
    databaseURL: "https://anti-drugs-jerusalem.firebaseio.com",
    storageBucket: "anti-drugs-jerusalem.appspot.com",
    messagingSenderId: "944977183444"
  };
  firebase.initializeApp(config);
  };
}
