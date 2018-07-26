import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@core/services/settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  searchToggleStatus: boolean;

  constructor(public settings: SettingsService) {
  }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }

  ngOnInit() {
  }

}
