import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public motto = '大道虽简，知易行难。';

  constructor(
    public app: AppService
  ) { }

  ngOnInit() { }

}
