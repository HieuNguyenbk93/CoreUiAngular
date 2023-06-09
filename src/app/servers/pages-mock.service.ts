import { Injectable } from '@angular/core';
import { Page } from '../models/page.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesMockService {

  private pages: Page[] = [];
  private displayPagesSubject: BehaviorSubject<Page[]> = new BehaviorSubject<Page[]>([]);

  page$: Observable<Page[]> = this.displayPagesSubject.asObservable();

  constructor() { }

  getListPage(){
    this.pages = [
      { name: 'Dashboard', icon: 'fa-solid fa-house'},
      { name: 'Content', icon: 'fa-solid fa-house'},
      { name: 'Analytic', icon: 'fa-solid fa-house'},
      { name: 'Like', icon: 'fa-solid fa-house'},
      { name: 'Comment', icon: 'fa-solid fa-house'},
    ];
    this.displayPagesSubject.next(this.pages);
  }
}
