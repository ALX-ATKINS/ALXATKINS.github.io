import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
  choice: number = 0;
  filter: boolean = false;
 
  constructor(private router: Router) {
    if (this.router.url === "/") {
      this.choice = 0;
    } else if (this.router.url === "/work") {
      this.choice = 1;
      this.filter = true;
    } else if (this.router.url === "/contact") {
      this.choice = 2;
    } else {
      this.filter = true;
    }
  }

}
