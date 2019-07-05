import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { destory } from './other/destory';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {

  public animation = 'init';

  public info = {
    isDesktop: window.innerWidth > 599
  };

  public subscriptions: Subscription[] = [];

  public title = '夜寒苏的窗台';

  constructor(
    public router: Router
  ) {
    this.subscriptions
      .push(
        router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.animation = event.urlAfterRedirects.slice(1);
          }
        })
      );
    this.subscriptions
      .push(
        fromEvent(window, 'resize')
          .pipe(
            debounceTime(100)
          ).subscribe(() => this.info.isDesktop = window.innerWidth > 599)
      );
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
