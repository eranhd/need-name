import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { login } from './login';

@NgModule({
  declarations: [
    login
  ],
  imports: [
   // IonicModule.forChild(LoginPage),
    IonicModule.forRoot(login)
  ],
  exports: [
    login
  ]
})
export class LoginModule {}
