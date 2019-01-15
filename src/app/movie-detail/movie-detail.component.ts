import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movieData: object;
  imgDomain: string;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) {
    this.imgDomain = movieService.getImgDomain();
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(this.id).then(data => {
      this.movieData = data;
    });
  }
}
