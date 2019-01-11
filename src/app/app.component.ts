import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imgDomain = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  data: object = {};
  constructor(private api: MoviesService) {
    api.popularMovies().then(result => {
      this.data = result;
      console.log('peliculas recibidas');
    });
    console.log('peliculas pedidas');
  }
}
