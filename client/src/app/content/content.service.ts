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
    return this.api.get<Article>(`/content/${id}`);
  }

  getMoreArticlesByRandom(total: number) {
    return this.api.get<Article[]>(`/content/random/${total}`);
  }

  like(id: number) {
    return this.api.patch<number>(`/content/like/${id}`, {});
  }

  share(id: number) {
    return this.api.patch<number>(`/content/share/${id}`, {});
  }

}
