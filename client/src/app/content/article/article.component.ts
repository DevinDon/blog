import { Component, OnInit } from '@angular/core';

interface Article {
  title: string;
  author: string;
  date: number | Date;
  image?: string;
  summary: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articles: Article[] = [
    { title: '测试标题', author: '夜寒苏', date: Date.now(), image: 'assets/background-light.png', summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。' },
    { title: '测试标题', author: '夜寒苏', date: Date.now(), summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。' },
    { title: '测试标题', author: '夜寒苏', date: Date.now(), image: 'assets/background-light.png', summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。' },
    { title: '测试标题', author: '夜寒苏', date: Date.now(), image: 'assets/background-light.png', summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。' },
    { title: '测试标题', author: '夜寒苏', date: Date.now(), summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。' },
    { title: '测试标题', author: '夜寒苏', date: Date.now(), summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。' },
    { title: '测试标题', author: '夜寒苏', date: Date.now(), summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。' }
  ];

  constructor() { }

  ngOnInit() { }

  trackByFn(index: number, item: Article) {
    return item.date;
  }

}
