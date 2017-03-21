import { Component, OnInit } from '@angular/core';
import {NavItem} from '../items/nav';
import {NavServiceService} from'./service/nav-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private navSer:NavServiceService;

  constructor() { 
    this.navSer = new NavServiceService();
  }

  ngOnInit() {
  }

}
