import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/service/joke.service';

@Component({
  selector: 'app-chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.css']
})
export class ChuckNorrisJokeComponent implements OnInit {

  joke: string;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    setInterval(
      () => this.jokeService.getJoke().subscribe(data => this.joke = data.value),
      3000);
  }

}
