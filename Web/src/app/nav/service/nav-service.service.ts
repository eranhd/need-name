import { Injectable } from '@angular/core';
import {NavItem} from '../../items/nav';

@Injectable()
export class NavServiceService {

  private arrItems:NavItem[];
  
  constructor() {
    this.arrItems = [
      new NavItem('הצגת דיווחים', 'report', 'report'),
      new NavItem('ראשי', 'home', 'home'),
      new NavItem('הגדרת טפסים', 'settingReport', 'settingReport'),
      
    ];
   };

   public getArrItems(){
     return this.arrItems;
   };

}
