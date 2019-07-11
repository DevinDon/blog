import { Component, OnInit } from '@angular/core';

interface Category {
  image: string;
  link: string;
  name: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categories: Category[] = [
    { image: 'assets/category/1.jpg', link: '/content/article', name: '文字' },
    { image: 'assets/category/2.jpg', link: '/content/image', name: '意境' },
    { image: 'assets/category/3.jpg', link: '/content/song', name: '音乐' },
    { image: 'assets/category/4.jpg', link: '/content/video', name: '影视' },
    { image: 'assets/category/5.jpg', link: '/content/question', name: '解惑' }
  ];

  constructor() { }

  ngOnInit() { }

}
