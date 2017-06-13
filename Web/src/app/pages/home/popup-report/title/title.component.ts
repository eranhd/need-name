import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../../models/Team';
import { TeamComponent } from './team/team.component';
import { DateComponent } from './date/date.component';

@Component({
  selector: 'popup-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() date: string;
  @Input() time: string;
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
