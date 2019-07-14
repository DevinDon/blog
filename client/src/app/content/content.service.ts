import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Content } from './content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    public api: ApiService
  ) { }

  getOneByID(id: number) {
    return this.api.get<Content>(`/content/${id}`);
  }

  getMoreByRandom(total: number) {
    return this.api.get<Content[]>(`/content/random/${total}`);
  }

  like(id: number) {
    return this.api.patch<number>(`/content/like/${id}`);
  }

  share(id: number) {
    return this.api.patch<number>(`/content/share/${id}`);
  }

}
