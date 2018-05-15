import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;
  private _token: string;

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  constructor() {
    this.token = 'abc';
  }

  getAuthorizationToken() {

    return this.token;
  }
}
