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
  data: Array<object> = [];
  constructor(private api: MoviesService, private logger: LoggerService) {
    api.popularMovies().then((result: any) => {
      this.data = result.results;
      logger.log('peliculas recibidas');
    });
    logger.log('peliculas pedidas');
  }
}
