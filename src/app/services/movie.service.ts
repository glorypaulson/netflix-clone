import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {

  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODJhZDI2OWE4MTE2NWQwODI4NWMxM2Y2MDVkNWFjOSIsIm5iZiI6MTcyMDAyNDk4OS45ODc2NDIsInN1YiI6IjY2ODU3ZDNiMTlkYzJjNGM5ZDNiMjU4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZD8Awyh_3nV9ALkO9fLPbMQvvrjEuiYq4Qlt3_3vnGg'
  }
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  
  getMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie',options);
  }

  getTVshows(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/tv',options);
  }

  getNowPlaying(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing',options);
  }

  getPopular(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular',options);
  }

  getTopRatedMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated',options);
  }

  getUpcomingMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming',options);
  }
}
