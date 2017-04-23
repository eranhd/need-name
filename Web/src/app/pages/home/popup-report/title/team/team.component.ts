import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../../../models/Team';

@Component({
  selector: 'app-popup-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team:Team;
  private teamMember:string;
  constructor() { }

  ngOnInit() {
    this.teamMember = this.team.toString();
  }

}
