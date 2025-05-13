import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  imports: [],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {
  constructor(private router: Router) {}


  enterToFlow(value: number) {
      this.router.navigate([`/manager/${value}`])
  }
}
