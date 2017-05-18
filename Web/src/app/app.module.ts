import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.router';

import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';

import {NavServiceService} from'./service/nav/nav-service.service';
import { SettingReportService } from './service/setting-report/setting-report.service';
import { ReportService } from './service/report/report.service'
import { UserService } from './service/user/user.service';
import { ManageUserService } from './service/manage-users/manage-user.service';
import { MapsService } from './service/maps/maps.service';
import { RoleService } from './service/role/role.service';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { SettingReportComponent } from './pages/setting-report/setting-report.component';
import { FirebaseService } from './service/firebase/firebase.service';
import { AngularFireModule, AuthProviders, AuthMethods,  FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { AddNewUserComponent } from './pages/add-new-user/add-new-user.component';
import { ReportComponent } from './pages/report/report.component';
import { ChartsModule } from 'ng2-charts';



import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapsComponent } from './pages/maps/maps.component';
import { MaterialModule, MdDialog } from '@angular/material';
import { MobileMainComponent } from './mobile/pages/mobile-main/mobile-main.component';
//import { StartShiftComponent } from './pages/report/start-shift/start-shift.component';
import { ShiftService } from './service/shift/shift.service';
import { GraphsComponent } from './pages/graphs/graphs/graphs.component';
import { LastReportComponent,  DialogLastReport } from './pages/home/last-report/last-report.component';
import { PopupReportComponent } from './pages/home/popup-report/popup-report.component';
import { TitleComponent } from './pages/home/popup-report/title/title.component';
import { BodyComponent } from './pages/home/popup-report/body/body.component';
import { DateComponent } from './pages/home/popup-report/title/date/date.component';
import { TeamComponent } from './pages/home/popup-report/title/team/team.component';
import { MobileLoginComponent } from './mobile/pages/mobile-login/mobile-login.component';
import { MobileSpotComponent } from './mobile/pages/mobile-spot/mobile-spot.component';
import { StartPatrolComponent } from './mobile/pages/start-patrol/start-patrol.component';
import { MobileHeaderComponent } from './mobile/pages/mobile-header/mobile-header.component';
import { MobileFooterComponent } from './mobile/pages/mobile-footer/mobile-footer.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBzTCOzgKlkX-8vxhzDDFdH_M5QKRW53gw",
    authDomain: "antidrugsjerusalem.firebaseapp.com",
    databaseURL: "https://antidrugsjerusalem.firebaseio.com",
    storageBucket: "antidrugsjerusalem.appspot.com",
    messagingSenderId: "767801084656"
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
    SettingReportComponent,
    AddNewUserComponent,
    ReportComponent,
    MapsComponent,
    MobileMainComponent,
  //  StartShiftComponent,
    GraphsComponent,
    LastReportComponent,
    PopupReportComponent,
    TitleComponent,
    BodyComponent,
    DateComponent,
    TeamComponent,
    MobileLoginComponent,
    DialogLastReport,
    MobileSpotComponent,
    StartPatrolComponent,
    MobileHeaderComponent,
    MobileFooterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOpMbZqfS8nVvrC-BoPGP-UAmuJdFyLzE'
    }),
    MaterialModule,
    ChartsModule
  ],
  
  providers: [
    UserService,
    NavServiceService,
    SettingReportService,
    FirebaseService,
    ManageUserService,
    MapsService,
    RoleService,
    ReportService,
    ShiftService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogLastReport
  ]
})
export class AppModule {
  constructor(){
    var str = {
      apiKey: "AIzaSyAOpMbZqfS8nVvrC-BoPGP-UAmuJdFyLzE",
      authDomain: "anti-drugs-jerusalem.firebaseapp.com",
      databaseURL: "https://anti-drugs-jerusalem.firebaseio.com",
      storageBucket: "anti-drugs-jerusalem.appspot.com",
      messagingSenderId: "944977183444" 
    };
    firebase.initializeApp(firebaseConfig);
  }
  
 }
