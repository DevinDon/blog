import { Component, OnInit } from '@angular/core';
import { Content } from '../content.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
export class ArticleComponent implements OnInit {

  public article: Content;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.article = {
        id: 0,
        title: '测试标题',
        author: '夜寒苏',
        category: 'article',
        date: Date.now(),
        image: 'assets/background-light.png',
        summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。',
        content: undefined as any
      };
    }, 1500);
    setTimeout(() => {
      this.article = {
        id: 0,
        title: '测试标题',
        author: '夜寒苏',
        category: 'article',
        date: Date.now(),
        image: 'assets/background-light.png',
        summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。',
        content: `内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
        容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
        容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
        容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
        容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
        容内容内容内容内容内容内容内容内容内容`
      };
    }, 3000);
  }

}
