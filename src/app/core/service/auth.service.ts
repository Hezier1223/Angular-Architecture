import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;


  login(): Observable<Object> {
    return this.http.post(`${environment.CRONUS_API}/login`, {
      account: 'admin',
      password: 'b92a27d41aa04fd6addd533b13618ed6',
      roleCodes: 'system_ag'
    }).pipe(
      tap(_ => {
        this.isLoggedIn = true;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
