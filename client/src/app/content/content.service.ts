import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Content } from './content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public cache: { [index: number]: Content } = {};

  constructor(
    public api: ApiService
  ) { }

  getOneByID(id: number) {
    return (this.cache[id] && of({ status: true, content: this.cache[id] })) || this.api.get<Content>(`/content/${id}`);
  }

  getMoreByRandom(total: number) {
    return this.api.get<Content[]>(`/content/random/${total}`)
      .pipe(tap(result => result.status && result.content.forEach(content => this.cache[content.id] = content)));
  }

  getMoreByRecent(total: number) {
    return this.api.get<Content[]>(`/content/recent/${total}`)
      .pipe(tap(result => result.status && result.content.forEach(content => this.cache[content.id] = content)));
  }

  like(id: number) {
    return this.api.patch<number>(`/content/like/${id}`);
  }

  share(id: number) {
    return this.api.patch<number>(`/content/share/${id}`);
  }

}
