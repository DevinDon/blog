import { Component, OnInit } from '@angular/core';

interface Event {
  date: number | Date;
  title: string;
  content: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public events: Event[] = [
    { date: new Date('2017-01-02'), title: '标题了标题', content: '这里是内容这里是内容内容内容内容内容。' },
    { date: new Date('2017-01-02'), title: '标题了标题', content: '这里是内容这里是内容内容内容内容内容。' },
    { date: new Date('2017-01-02'), title: '标题了标题', content: '这里是内容这里是内容内容内容内容内容。' },
    { date: new Date('2017-01-02'), title: '标题了标题', content: '这里是内容这里是内容内容内容内容内容。' },
    { date: new Date('2017-01-02'), title: '标题了标题', content: '这里是内容这里是内容内容内容内容内容。' },
  ];

  public mottos: string[] = [
    '从善如登，从恶如崩。',
    '宠辱不惊，悲喜无鸣。',
    '但行好事，莫问前程。'
  ];

  constructor() { }

  ngOnInit() { }

}
