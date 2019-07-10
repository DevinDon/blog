import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ApiService } from '../api.service';
import { destory } from '../other/destory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public motto = '大道虽简，知易行难。';

  public mottos: string[] = [
    '大道虽简，知易行难'
  ];

  private subscriptions: Subscription[] = [];

  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.api.get('/motto/more/10').subscribe(mottos => this.mottos = mottos);
    this.subscriptions.push(
      timer(5000, 5000)
        .subscribe(
          () => this.motto = this.mottos[Math.floor(Math.random() * this.mottos.length)]
        )
    );
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
