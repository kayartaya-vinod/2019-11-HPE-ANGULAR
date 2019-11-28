import { Injectable } from '@angular/core';
import { UrlsService } from './urls.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private urlService: UrlsService, private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<any> {
    const url = this.urlService.urls['movie'] + '&s=' + searchTerm;
    return this.http.get(url);
  }
}
