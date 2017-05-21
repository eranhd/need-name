import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { SettingReportComponent } from './pages/setting-report/setting-report.component';
import { AddNewUserComponent } from './pages/add-new-user/add-new-user.component';
import { ReportComponent } from './pages/report/report.component';
import { MobileMainComponent } from './mobile/pages/mobile-main/mobile-main.component';
import { MapsComponent } from './pages/maps/maps.component';
import { GraphsComponent } from './pages/graphs/graphs/graphs.component';
import { MobileLoginComponent } from './mobile/pages/mobile-login/mobile-login.component';

import { StartPatrolComponent } from './mobile/pages/start-patrol/start-patrol.component'
import { EndPatrolComponent } from './mobile/pages//end-patrol/end-patrol.component';

import { MobileSpotComponent } from './mobile/pages/mobile-spot/mobile-spot.component';
import { MobileHomeComponent } from './mobile/pages/mobile-home/mobile-home.component';
import { TeamStatisticsComponent } from './mobile/pages/mobile-home/team-statistics/team-statistics.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'main', component: MainComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'settingReport', component: SettingReportComponent },
            { path: 'addNewUser', component: AddNewUserComponent },
            { path: 'report', component: ReportComponent },
            { path: 'maps', component: MapsComponent },
            { path: 'graphs', component: GraphsComponent }
        ]
    },
    { path: 'mobile_login', component: MobileLoginComponent },
    {
        path: 'mobile_main', component: MobileMainComponent,
        children: [
            { path: '', redirectTo: 'mobile_home', pathMatch: 'full', },
            { path: 'report', component: ReportComponent },
            { path: 'start_patrol', component: StartPatrolComponent },
            { path: 'mobile_spot', component: MobileSpotComponent },
            {
                path: 'mobile_home', component: MobileHomeComponent,
                children: [
                    { path: '', redirectTo: 'team-statistics', pathMatch: 'full' },
                    { path: 'team-statistics', component: TeamStatisticsComponent }
                ]
            },
            { path: 'end_patrol', component: EndPatrolComponent }
        ]
    },


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);