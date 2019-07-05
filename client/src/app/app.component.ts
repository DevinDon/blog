import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { destory } from './other/destory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routing', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':leave', [style({ position: 'absolute', top: 0, left: 0, opacity: 1, width: '100%' })], { optional: true }),
        query(':enter', [style({ position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%' })], { optional: true }),
        query(':enter', [style({ left: '100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [animate('500ms ease-in-out', style({ left: '100%', opacity: 0 }))], { optional: true }),
          query(':enter', [animate('500ms ease-in-out', style({ left: '0%', opacity: 1 }))], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true }),
      ])
    ])
  ]
})
export class AppComponent implements OnDestroy {

  public routing = -1;

  public subscriptions: Subscription[] = [];

  constructor(
    public app: AppService,
    private router: Router
  ) {
    this.subscriptions
      .push(
        router.events.subscribe(event => event instanceof NavigationEnd && (this.routing = event.id))
      );
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
