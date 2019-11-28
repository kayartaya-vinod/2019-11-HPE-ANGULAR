import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  searchTerm: string;
  movies: Array<any>;

  constructor(private mvService: MovieService) { }

  searchMovies() {
    this.mvService.searchMovies(this.searchTerm)
      .subscribe(resp => this.movies = resp.Search);
  }
}
