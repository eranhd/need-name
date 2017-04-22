import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { Login } from './login';

@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    IonicModule.forRoot(Login),
  ],
  exports: [
    Login
  ]
})
export class LoginModule {}
