import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from './content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public contents: Content[] = [
    {
      title: '测试标题',
      author: '夜寒苏',
      category: 'article',
      date: Date.now(),
      image: 'assets/background-light.png',
      summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。',
      content: ''
    },
    {
      title: '测试标题',
      author: '夜寒苏',
      category: 'image',
      date: new Date('2010-03-21'),
      image: 'assets/background-light.png',
      summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。',
      content: ''
    },
    {
      title: '测试标题',
      author: '夜寒苏',
      category: 'article',
      date: new Date('2000-02-21'),
      summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。',
      content: ''
    },
    {
      title: '测试标题',
      author: '夜寒苏',
      category: 'video',
      date: Date.now(),
      image: 'assets/background-dark.png',
      summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。',
      content: ''
    },
    {
      title: '测试标题',
      author: '夜寒苏',
      category: 'song',
      date: new Date('2000-02-21'),
      summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。',
      content: ''
    },
    {
      title: '测试标题',
      author: '夜寒苏',
      category: 'question',
      date: new Date('2013-02-21'),
      image: 'assets/background-dark.png',
      summary: '这里是摘要。这里是摘要。这里是摘要。这里是摘要。这里是摘要。',
      content: ''
    },
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() { }

  openDetail() {

  }

  trackByFn(index: number, item: Content) {
    return item.date;
  }

}
