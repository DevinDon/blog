import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { fromEvent, generate, of, Subscription } from 'rxjs';
import { concatMap, debounceTime, delay } from 'rxjs/operators';
import { destory } from './other/destory';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {

  public animation = 'init';

  public histories: string[] = [];

  public offset: { [index: string]: { x: number, y: number } } = {};

  public info = {
    isDesktop: window.innerWidth > 599
  };

  public subscriptions: Subscription[] = [];

  public title = '夜寒苏的窗台';

  constructor(
    public bar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router
  ) {
    // routing hook
    this.subscriptions
      .push(
        router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
            this.offset[this.histories.pop() || ''] = { x: window.pageXOffset, y: window.pageYOffset };
            this.histories.push(event.url);
          }
          if (event instanceof NavigationEnd) {
            this.animation = event.urlAfterRedirects;
          }
        })
      );
    // window resize
    this.subscriptions
      .push(
        fromEvent(window, 'resize')
          .pipe(
            debounceTime(100)
          ).subscribe(() => this.info.isDesktop = window.innerWidth > 599)
      );
  }

  scrollToTop(height = 0) {
    generate(
      window.pageYOffset,
      y => y > height,
      y => y - 0.05 * y - 8
    ).pipe(
      concatMap(y => of(y).pipe(delay(16.7)))
    ).subscribe(y => window.scrollTo(0, y));
  }

  scrollToBottom(height = document.body.scrollHeight) {
    generate(
      height,
      y => y > 0,
      y => y - 0.015 * y - 8
    ).pipe(
      concatMap(y => of(y).pipe(delay(16.7)))
    ).subscribe(y => window.scrollTo(0, height - y));
  }

  scrollToState() {
    setTimeout(() => {
      if (this.offset[location.pathname]) {
        window.scrollTo(0, this.offset[location.pathname].y);
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
  }

  openbar(message: string, action: string = '确认', config: MatSnackBarConfig = { duration: 3000 }) {
    this.bar.open(message, action, config);
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
