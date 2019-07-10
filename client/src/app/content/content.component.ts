import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from './content.model';
import { ContentService } from './content.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public contents: Article[] = [];

  constructor(
    public app: AppService,
    public router: Router,
    public service: ContentService
  ) { }

  ngOnInit() {
    this.getMore();
  }

  getMore() {
    this.service.getMoreArticlesByRandom(7).subscribe(result => {
      if (result.status) {
        this.contents = result.content;
      } else {
        this.app.bar.open('无法获取数据，请稍后重试。', '确认');
      }
    });
  }

  openDetail(content: Article) {
    // this.router.navigate([content.category, content.id]);
    this.router.navigate(['article', content.id]);
  }

  trackByFn(index: number, item: Article) {
    return item.date;
  }

}
