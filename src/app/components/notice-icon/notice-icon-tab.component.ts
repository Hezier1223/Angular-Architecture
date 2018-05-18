import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoticeItem } from './interface';

@Component({
  selector: 'app-notice-icon-tab',
  templateUrl: './notice-icon-tab.component.html',
  styleUrls: ['./notice-icon-tab.component.less'],
  preserveWhitespaces: false,
})
export class NoticeIconTabComponent {
  @Input() data: NoticeItem;
  @Output() select = new EventEmitter<any>();
  @Output() clear = new EventEmitter<string>();

  onClick(item: NoticeItem) {
    this.select.emit({
      title: this.data.title,
      item,
    });
  }

  onClear() {
    this.clear.emit(this.data.title);
  }
}
