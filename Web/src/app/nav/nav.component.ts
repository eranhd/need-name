import { Component, OnInit } from '@angular/core';
import {NavItem} from '../items/nav';
import {NavServiceService} from'./service/nav-service.service';
import { UserService } from '../service/user/user.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private navSer:NavServiceService;

  constructor(private userService:UserService,
  private af:AngularFire) { 
    this.navSer = new NavServiceService();
  }

  ngOnInit() {
  }

}
