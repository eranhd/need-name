import { NgModule, Component } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { login } from './login';

@NgModule({
  declarations: [
    ],
  imports: [
   // IonicModule.forChild(LoginPage),
    IonicModule.forRoot(login)
  ],
  exports: [
    login
  ]
})


@Component({
  selector: 'app-page-login',
  templateUrl: './login.html',
})
export class LoginModule {}
