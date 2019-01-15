import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  imgDomain: string;
  data: Array<object>;
  title: string = '';
  constructor(private api: MoviesService, private logger: LoggerService) {
    this.imgDomain = api.getImgDomain();
  }
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
