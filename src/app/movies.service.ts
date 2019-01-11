import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey = '323112ea2281b9eb70f319f4df422c6b';
  endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  http: HttpClient;
  constructor(http: HttpClient, private logger: LoggerService) {
    this.http = http;
  }
  popularMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.endpoint).subscribe(result => {
        this.logger.log('tenemos las pelis!');
        resolve(result);
      });
    });
  }
}