import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private router: Router) {}

  shouldShowLayout(): boolean {
    // Check if the current route is neither signup nor signin
    const currentRoute = this.router.url;
    return !currentRoute.includes('/signup') && !currentRoute.includes('/signin');
  }
}
