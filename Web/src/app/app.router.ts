import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
//import { }

export const router:Routes = [
    {path: '', redirectTo:'login', pathMatch:'full'},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'main', component:MainComponent}


];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);