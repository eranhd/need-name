import { Injectable } from '@angular/core';
import {NavItem} from '../../models/nav';

@Injectable()
export class NavServiceService {

  private arrItems:NavItem[];
  
  constructor() {
    this.arrItems = [
     // new NavItem('הצגת דיווחים', 'report', 'report'),
      new NavItem('ראשי', 'home', 'home', 'home'),
      new NavItem('משמרות', 'shift', 'shift', 'report'),
      new NavItem('הגדרת טפסים', 'settingReport', 'settingReport', 'settings'),
      new NavItem('ניהול משתמשים', 'addNewUser', 'addNewUser', 'people'),
      new NavItem('דוחות', 'report', 'report', 'report'),
      new NavItem('מפה', 'maps', 'maps', 'map'),
      new NavItem('סטטיסטיקות', 'graphs', 'graphs', 'insert_chart')
      
      
    ];
   };

   

   public getArrItems(){
     return this.arrItems;
   };

}
