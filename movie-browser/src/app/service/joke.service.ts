import { Injectable } from '@angular/core';
import { UrlsService } from './urls.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private urlService: UrlsService, private http: HttpClient) { }

  // in urls.json -->
  // "joke": "https://api.chucknorris.io/jokes/random"

  getJoke(): Observable<any> {
    return this.http.get(this.urlService.urls['joke']);
  }

}
