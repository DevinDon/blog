import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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

  scrollTo() {

  }

  scrollToState() {
    setTimeout(() => {
      if (this.offset[location.pathname]) {
        window.scrollTo(this.offset[location.pathname].x, this.offset[location.pathname].y);
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
