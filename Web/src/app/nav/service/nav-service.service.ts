import { Injectable } from '@angular/core';
import {NavItem} from '../../items/nav';

@Injectable()
export class NavServiceService {

  private arrItems:NavItem[];
  
  constructor() {
    this.arrItems = [
      new NavItem('ראשי', 'main', 'main'),
      new NavItem('הצגת דיווחים', 'report', 'report')
    ];
   };

   public getArrItems(){
     return this.arrItems;
   };

}
