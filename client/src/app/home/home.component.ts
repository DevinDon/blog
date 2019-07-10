import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ApiService } from '../api.service';
import { AppService } from '../app.service';
import { destory } from '../other/destory';
import { Motto } from '../other/response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public motto: Motto = { id: 0, content: '大道虽简，知易行难。' };

  public mottos: Motto[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    public api: ApiService,
    public app: AppService
  ) { }

  ngOnInit() {
    this.api.get<Motto[]>('/motto/more/10').subscribe(result => this.mottos = result.content);
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
