import { Injectable } from '@angular/core';
import {NavItem} from '../../models/nav';

@Injectable()
export class NavServiceService {

  private arrItems:NavItem[];
  
  constructor() {
    this.arrItems = [
     // new NavItem('הצגת דיווחים', 'report', 'report'),
      new NavItem('ראשי', 'home', 'home', 'home'),
      new NavItem('הגדרת טפסים', 'settingReport', 'settingReport', ''),
      new NavItem('ניהול משתמשים', 'addNewUser', 'addNewUser', ''),
      new NavItem('report', 'report', 'report', '')
      
    ];
   };

   public getArrItems(){
     return this.arrItems;
   };

}
