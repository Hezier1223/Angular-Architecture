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
      this.authService.isLoggedIn = true;
      this.authService.token = val['data'];
      this.setMessage();
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
      this.router.navigate([redirect]).then();
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
