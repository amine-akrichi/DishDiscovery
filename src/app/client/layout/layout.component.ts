import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private router: Router, private _userService:UserService) {}
  isProfileMenuOpen = false;
  loggedInUsername:any;
  user:any;
  
  shouldShowLayout(): boolean {
    // Check if the current route is neither signup nor signin
    const currentRoute = this.router.url;
    return !currentRoute.includes('/signup') && !currentRoute.includes('/signin') && !currentRoute.includes('/users');
  }

  ngOnInit(): void {
    this.loggedInUsername = sessionStorage.getItem('username')
    this._userService.getUser(this.loggedInUsername).subscribe(
      (res) => {
        console.log(res);
        this.user = res;
      },
      (err) => console.log(err)
    );
  }

  redirect(): void {
    if(this.loggedInUsername){
      this.router.navigate(['/users', this.loggedInUsername]);
    }else{
      this.router.navigate(['/signin']);
    }
  }

}
