import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {
  private keywords: MetaDefinition;
  private description: MetaDefinition;
  private viewPort: MetaDefinition;

  constructor(private title: Title, private meta: Meta) {
    this.keywords = {
      name: 'keywords',
      content: 'Angular Architecture'
    };
    this.description = {
      name: 'description',
      content: 'Angular Architecture'
    };
  }

  /**
   * 为页面设置新的title
   * @param newTitle 新的title
   */
  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  /**
   * title设置为默认title
   */
  setDefaultTitle() {
    this.title.setTitle('Angular Architecture');
  }

  /**
   * 设置为加载中的title
   */
  setLoadingTitle() {
    this.title.setTitle('Loading...');
  }

  /**
   * 为页面设置新的关键词
   * @param newKeywords 新的关键词
   */
  setKeywords(newKeywords: string) {
    this.keywords.content = newKeywords;
    this.meta.updateTag(this.keywords);
  }

  /**
   * 为页面设置新的描述
   * @param newDescription 新的描述
   */
  setDescription(newDescription: string) {
    this.description.content = newDescription;
    this.meta.updateTag(this.description);
  }

  /**
   * 设置为手机查看的viewport
   */
  setPhoneView() {
    this.viewPort = {
      name: 'viewport',
      content: 'width=device-width, target-densitydpi=high-dpi, initial-scale=0.2, minimum-scale=0.1, maximum-scale=3.0'
    };
    this.meta.updateTag(this.viewPort);
  }

  /**
   * 设置为电脑查看的viewport
   */
  setPcView() {
    this.viewPort = {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, user-scalable=no'
    };
    this.meta.updateTag(this.viewPort);
  }
}
