import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AppService } from '../app.service';

interface Route {
  icon: string;
  link: string;
  text: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() public sidenav: MatSidenav;

  public routes: Route[] = [
    { icon: 'public', link: '/', text: '首页' },
    { icon: 'book', link: '/content', text: '阅读' },
    { icon: 'loyalty', link: '/content', text: '分类' },
    { icon: 'info', link: '/about', text: '关于' }
  ];

  // public routes: Route[] = [
  //   { icon: 'home', link: '/', text: '首页' },
  //   { icon: 'library_books', link: '/article', text: '文字' },
  //   { icon: 'photo_library', link: '/image', text: '意境' },
  //   { icon: 'library_music', link: '/song', text: '音乐' },
  //   { icon: 'video_library', link: '/video', text: '影视' },
  //   { icon: 'help', link: '/video', text: '解惑' },
  //   { icon: 'library_add', link: '/about', text: '关于' }
  // ];

  constructor(
    public app: AppService
  ) { }

  ngOnInit() { }

}
