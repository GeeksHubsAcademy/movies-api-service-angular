import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imgDomain = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  data: Array<object>;
  title: string = '';
  constructor(private api: MoviesService, private logger: LoggerService) {}
  loadPopularMovies() {
    this.api.popularMovies().then((result: any) => {
      this.data = result.results;
      this.logger.log('peliculas recibidas');
      this.title = 'Popular movies';
    });
    this.logger.log('peliculas pedidas');
  }
  loadTrendingMovies() {
    this.api.trendingMovies().then((result: any) => {
      this.data = result.results;
      this.logger.log('peliculas recibidas');
      this.title = 'Trending movies';
    });
    this.logger.log('peliculas pedidas');
  }
  clean() {
    this.data = undefined;
  }
}
