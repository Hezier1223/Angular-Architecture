import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  token: string;

  constructor() {
  }
}
