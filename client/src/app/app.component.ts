import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routing', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(
          ':leave',
          [style({ position: 'fixed', top: 0, right: 0, width: '100%', minHeight: '100vh', zIndex: '0' })],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ position: 'fixed', top: 0, right: '100%', width: '100%', minHeight: '100vh', zIndex: '1' })],
          { optional: true }
        ),
        query(':enter', [style({ right: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [animate('500ms ease-in-out', style({ opacity: 0, right: '-100%' }))], { optional: true }),
          query(':enter', [animate('500ms ease-in-out', style({ opacity: 1, right: 0 }))], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true })
      ])
    ])
  ]
})
export class AppComponent {

  public routing = -1;

  constructor(
    public app: AppService
  ) { }

}
