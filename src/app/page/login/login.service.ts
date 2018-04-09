import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service';

@Injectable()
export class LoginService {

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    console.log(this.message);
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe((val) => {
      console.log(val);
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        console.log(this.authService.redirectUrl);
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

        // Redirect the user
        this.router.navigate([ redirect ]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
