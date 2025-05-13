import { Injectable } from '@angular/core';
import { Volunteer } from '../../classes/volunteer';

const volunteers: Volunteer[] = [
  {firstName: 'rachel', lastName: 'cc', age: 23},
  {firstName: 'tamar', lastName: 'ff', age: 60},
  {firstName: 'neomi', lastName: 'ss', age: 12}
]

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  title?: string;

  constructor() { }

  public getAllVolunteer(): Volunteer[] {
    return volunteers;
  }

  updateTitle(title: string) {
    this.title = title;
  }
}
