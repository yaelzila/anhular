import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VolunteerService } from '../services/volunteer/volunteer.service';
import { Volunteer } from '../classes/volunteer';

@Component({
  selector: 'volunteer-list',
  imports: [],
  templateUrl: './volunteer-list.component.html',
  styleUrl: './volunteer-list.component.css'
})
export class VolunteerListComponent implements OnInit {
  @Input()description?: string;
  @Output()endText = new EventEmitter<string>;
  volunteers?: Volunteer[];
  title?: string = ''

  constructor(private readonly volunteerService: VolunteerService) {
  }

  ngOnInit(): void {
    this.volunteers = this.volunteerService.getAllVolunteer();
    // this.volunteerService.updateTitle('volunteer-list');
    // this.title = this.volunteerService.title;
  }

  sendTextToParent() {
    this.endText.emit('this ia all volunteer');
  }

}
