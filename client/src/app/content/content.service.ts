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
    return this.api.get<Article>(`/detail/${id}`);
  }

  getMoreArticlesByRandom(total: number) {
    return this.api.get<Article[]>(`/detail/random/${total}`);
  }

  like(id: number) {
    return this.api.patch<number>(`/detail/like/${id}`, {});
  }

  share(id: number) {
    return this.api.patch<number>(`/detail/share/${id}`, {});
  }

}
