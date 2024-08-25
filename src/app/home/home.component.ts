import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { IvideoContents } from '../models/videoContents.interface';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MovieService) { }
  movies: IvideoContents[] = [];
  tvshows: IvideoContents[] = [];
  nowPlaying: IvideoContents[] = [];
  popular: IvideoContents[] = [];
  rated: IvideoContents[] = [];
  upcoming: IvideoContents[] = [];

  sources = [
    this.moviesService.getMovies(),
    this.moviesService.getTVshows(),
    this.moviesService.getNowPlaying(),
    this.moviesService.getPopular(),
    this.moviesService.getTopRatedMovies(),
    this.moviesService.getUpcomingMovies()
  ]
  ngOnInit(): void {
    // this.moviesService.getMovies().subscribe(resp => {
    //   this.movies = resp.results;
    // });
    // this.moviesService.getTVshows().subscribe(resp => {
    //   this.tvshows = resp.results;
    // });
    // this.moviesService.getNowPlaying().subscribe(resp => {
    //   this.nowPlaying = resp.results
    // })
    // this.moviesService.getPopular().subscribe(resp => {
    //   this.popular = resp.results;
    // })
    // this.moviesService.getTopRatedMovies().subscribe(resp => {
    //   this.rated = resp.results;
    // })
    // this.moviesService.getUpcomingMovies().subscribe(resp => {
    //   this.upcoming = resp.results;
    // })
    forkJoin(this.sources).pipe(
      map(([movies, tvShows, nowPlaying,popular, rated , upcoming])=>{
        return {movies, tvShows, nowPlaying,popular ,rated , upcoming}
      })
    ).subscribe( resp => {
      this.movies = resp.movies.results as IvideoContents[];
      this.tvshows = resp.tvShows.results as IvideoContents[];
      console.log(this.tvshows);
      this.nowPlaying = resp.nowPlaying.results as IvideoContents[];
      this.popular = resp.popular.results as IvideoContents[];
      this.rated = resp.rated.results as IvideoContents[];
      this.upcoming = resp.upcoming.results as IvideoContents[];
    }) 
    
  }
}
