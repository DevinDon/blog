import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { BaseResponse } from './other/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public static HOST = 'http://blog.don.red/api';

  constructor(
    public http: HttpClient
  ) {
    if (isDevMode()) {
      ApiService.HOST = 'http://localhost:8080';
    }
  }

  get<T = any>(path: string) {
    return this.http.get<BaseResponse<T>>(ApiService.HOST + path);
  }

  post<T = any>(path: string, data: any) {
    return this.http.post<BaseResponse<T>>(ApiService.HOST + path, data);
  }

}
