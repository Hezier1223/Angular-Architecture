import { Component, HostBinding, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../../shared/animation/route-animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
  animations: [ slideInDownAnimation ]
})
export class LoginComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor() {
  }

  ngOnInit() {
  }

}
