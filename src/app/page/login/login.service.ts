import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '@env/environment';
import { Md5 } from 'ts-md5';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(): Observable<Object> {
    return this.http.post(`${environment.CRONUS_API}/login`, {
      account: 'admin',
      password: Md5.hashStr('1data$INFO'),
      roleCodes: 'system_ag'
    });
  }

}
