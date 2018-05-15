import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NGXLogger } from 'ngx-logger';

/** Pass untouched request ßthrough to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(private Logger: NGXLogger) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    this.Logger.info('interceptor');
    return next.handle(req);
  }
}
