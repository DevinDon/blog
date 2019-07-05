import { Component, OnInit } from '@angular/core';
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

  public routes: Route[] = [
    { icon: 'library_books', link: '/article', text: '文字' },
    { icon: 'photo_library', link: '/image', text: '影像' },
    { icon: 'library_music', link: '/song', text: '声音' },
    { icon: 'video_library', link: '/video', text: '视频' },
    { icon: 'library_add', link: '/about', text: '关于' }
  ];

  constructor(
    public app: AppService
  ) { }

  ngOnInit() { }

}
