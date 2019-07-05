import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { destory } from './other/destory';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {

  public animation = -1;

  public subscriptions: Subscription[] = [];

  public title = '夜寒苏的窗台';

  constructor(
    public router: Router
  ) {
    this.subscriptions
      .push(
        router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.animation = event.id;
          }
        })
      );
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
