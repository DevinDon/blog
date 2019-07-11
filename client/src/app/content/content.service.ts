import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from './content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    public api: ApiService
  ) { }

  getOneArticleByID(id: number) {
    return this.api.get<Article>(`/article/${id}`);
  }

  getMoreArticlesByRandom(total: number) {
    return this.api.get<Article[]>(`/article/random/${total}`);
  }

  like(id: number) {
    return this.api.patch<number>(`/article/like/${id}`, {});
  }

  share(id: number) {
    return this.api.patch<number>(`/article/share/${id}`, {});
  }

}
