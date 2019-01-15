import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey = '323112ea2281b9eb70f319f4df422c6b';
  popularEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;
  http: HttpClient;
  data: object;
  movieEndpoint = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;

  constructor(http: HttpClient, private logger: LoggerService) {
    this.http = http;
  }
  popularMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.popularEndpoint).subscribe(result => {
        this.logger.log('tenemos las pelis populares!');
        this.data = result['results'];
        resolve(result);
      });
    });
  }
  trendingMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.trendingMoviesEndpoint).subscribe(result => {
        this.logger.log('tenemos las pelis trending!');
        this.data = result['results'];
        resolve(result);
      });
    });
  }
  getMovie(id) {
    // let arrayFiltrado = this.data.filter(movie => movie.id === id);
    // return arrayFiltrado[0];
    return new Promise(resolve => {
      this.http.get(this.movieEndpoint(id)).subscribe(result => {
        this.logger.log('esta es la peli del id:', id, result);
        resolve(result);
      });
    });
  }
  getImgDomain() {
    return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  }
}
