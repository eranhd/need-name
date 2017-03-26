import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

import {NavServiceService} from'./nav/service/nav-service.service';
import { SettingReportService } from './service/setting-report/setting-report.service';
import { UserService } from './service/user/user.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SettingReportComponent } from './setting-report/setting-report.component';
import { FirebaseService } from './service/firebase/firebase.service';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyAOpMbZqfS8nVvrC-BoPGP-UAmuJdFyLzE",
  authDomain: "anti-drugs-jerusalem.firebaseapp.com",
  databaseURL: "https://anti-drugs-jerusalem.firebaseio.com",
  storageBucket: "anti-drugs-jerusalem.appspot.com",
  messagingSenderId: "944977183444" 
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    SettingReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    UserService,
    NavServiceService,
    SettingReportService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
