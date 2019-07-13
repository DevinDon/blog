import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { highlightAuto } from 'highlight.js';
import * as Marked from 'marked';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { destory } from 'src/app/other/destory';
import { Article } from '../content.model';
import { ContentService } from '../content.service';

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
              this.article.content = Marked(
                this.article.content,
                { highlight: (code, language) => `<span class="language">${language}</span>` + highlightAuto(code).value }
              );
            } else {
              this.app.openBar('无法获取文章，请稍后重试。');
            }
          });
      })
    );
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
