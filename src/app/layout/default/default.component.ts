import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { ScrollService } from '@core/services/scroll';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class LayoutDefaultComponent {
  isFetching = false;

  constructor(
    router: Router,
    scroll: ScrollService,
    private _message: NzMessageService,
  ) {
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        _message.error(`无法加载${evt.url}路由`, {nzDuration: 1000 * 3});
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      setTimeout(() => {
        scroll.scrollToTop();
        this.isFetching = false;
      }, 100);
    });
  }
}
