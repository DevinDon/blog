import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public static HOST = 'http://blog-server:8080';

  constructor(
    public http: HttpClient
  ) {
    if (isDevMode()) {
      ApiService.HOST = 'http://localhost:8080';
    }
  }

  get<T = any>(path: string) {
    return this.http.get<T>(ApiService.HOST + path);
  }

  post<T = any>(path: string, data: any) {
    return this.http.post<T>(ApiService.HOST + path, data);
  }

}
