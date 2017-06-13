import { Component, OnInit } from '@angular/core';
import {NavItem} from '../../models/nav';
import {NavServiceService} from'../../service/nav/nav-service.service';
import { UserService } from '../../service/user/user.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navSer: NavServiceService;
  public open: boolean;
  constructor(public userService: UserService) {
    this.navSer = new NavServiceService();
    this.open = false;
  }

  ngOnInit() {
  }

}
