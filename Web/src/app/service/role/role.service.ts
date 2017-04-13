import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service'
import { ReportService } from '../report/report.service';
import { Router } from '@angular/router';


@Injectable()
export class RoleService {

  userService:UserService;
  constructor() {
    this.userService = new UserService();
   };

   public canDirect(path){
    
    return true;
   };

}
