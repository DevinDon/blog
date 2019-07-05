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
export class AppComponent {

  public routing = -1;

  constructor(
    public app: AppService
  ) { }

}
