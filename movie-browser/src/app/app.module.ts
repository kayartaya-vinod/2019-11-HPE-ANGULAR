import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ChuckNorrisJokeComponent } from './components/chuck-norris-joke/chuck-norris-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    MovieListComponent,
    MovieDetailsComponent,
    ChuckNorrisJokeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
