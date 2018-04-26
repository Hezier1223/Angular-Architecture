import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  token: string;

  constructor(private http: HttpClient) {
  }

  login(): Observable<Object> {
    return this.http.post(`${environment.CRONUS_API}/login`, {
      account: 'admin',
      password: Md5.hashStr('1data$INFO'),
      roleCodes: 'system_ag'
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
