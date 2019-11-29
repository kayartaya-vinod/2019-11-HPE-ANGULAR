import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  selectedMovie: any;

  @Input()
  loading: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
