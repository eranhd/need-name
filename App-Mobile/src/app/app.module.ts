import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { LoginComponent } from './Screens/login/login.component'
import { AngularFireModule} from 'angularfire2';
import {Routes, RouterModule} from '@angular/router';

export const firebaseConfig = {
  apiKey: "AIzaSyBzTCOzgKlkX-8vxhzDDFdH_M5QKRW53gw",
    authDomain: "antidrugsjerusalem.firebaseapp.com",
    databaseURL: "https://antidrugsjerusalem.firebaseio.com",
    storageBucket: "antidrugsjerusalem.appspot.com",
    messagingSenderId: "767801084656"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: 
    [MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
