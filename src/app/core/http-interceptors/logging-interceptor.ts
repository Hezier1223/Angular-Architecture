import { finalize, tap } from 'rxjs/operators';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private logger: NGXLogger) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    return next.handle(req)
      .pipe(
        tap(
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          error => ok = 'failed'
        ),
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
          this.logger.info(msg);
        })
      );
  }
}
