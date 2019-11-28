import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  public urls: any;

  constructor(http: HttpClient) {
    http.get('/urls.json')
      .subscribe(data => this.urls = data);
  }
}
