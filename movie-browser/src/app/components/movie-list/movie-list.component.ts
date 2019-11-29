import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input()
  movieList: any[];

  selectedMovie: any;
  loading: boolean = true;

  constructor(private mvService: MovieService) { }

  ngOnInit() {
  }

  getMovieDetails(imdbID: string) {
    this.loading = true;
    this.mvService.getMovieData(imdbID)
      .subscribe(data => {
        this.selectedMovie = data;
        this.loading = false;
      });
  }

}
