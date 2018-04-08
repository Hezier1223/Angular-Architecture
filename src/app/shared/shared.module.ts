import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
  ]
})
export class SharedModule {
}
