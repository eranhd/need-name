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

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'main', component: MainComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'home', component: HomeComponent },
            { path: 'settingReport', component: SettingReportComponent },
            { path: 'addNewUser', component: AddNewUserComponent },
            { path: 'report', component: ReportComponent }, 
            { path: 'maps', component: MapsComponent },
            { path: 'graphs', component: GraphsComponent }
        ]
    },
    { path: 'mobile_main', component: MobileMainComponent },



];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);