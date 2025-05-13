import { Component } from '@angular/core';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { VolunteerManagerComponent } from '../volunteer-manager/volunteer-manager.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'racheli-first-project';
  endText?: string;

  

  updateTextFromChild(event: string) {
    this.endText = event
  }
}
