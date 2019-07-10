import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../content.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppService } from 'src/app/app.service';
import { ContentService } from '../content.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { destory } from 'src/app/other/destory';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('article', [
      state('void', style({ opacity: 0 })),
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('* <=> *', [animate(300)])
    ])
  ]
})
export class ArticleComponent implements OnInit, OnDestroy {

  public article: Article;

  private subscriptions: Subscription[] = [];

  constructor(
    public app: AppService,
    public route: ActivatedRoute,
    public service: ContentService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.route.paramMap.subscribe(v => {
        const id = +v.get('id') || 0;
        this.service.getOneArticleByID(id)
          .subscribe(result => {
            if (result.status) {
              this.article = result.content;
            } else {
              this.app.bar.open('无法获取文章，请稍后重试。', '确认');
            }
          });
      })
    );
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
