import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private router: Router) {}
  isProfileMenuOpen = false;
  shouldShowLayout(): boolean {
    // Check if the current route is neither signup nor signin
    const currentRoute = this.router.url;
    return !currentRoute.includes('/signup') && !currentRoute.includes('/signin') && !currentRoute.includes('/userprofile');
  }
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  logout() {
    // Implement the logic to handle the "Logout" action
    alert('are you sure ?');
    // You can navigate to the logout route or perform other logout actions
  }
}
