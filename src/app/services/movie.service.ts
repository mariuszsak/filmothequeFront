import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Movie} from '../model/movie.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    myMovie: Movie;

    private allMoviesUrl = 'http://localhost:8080/all';
    private findMovieUrl = 'http://localhost:8080/find/';

    constructor(private http: HttpClient, private router: Router) {
        this.myMovie = new Movie();
    }


    getAllMovies() {
        // return this.http.get<Movie[]>(this.allMoviesUrl);
        return this.http.get(this.allMoviesUrl).pipe(
            map((data: any) => this.myMovie = data)
        );
    }



    returnFoundMovie() {
        return this.http.get(this.findMovieUrl + this.myMovie.title).pipe(
            map((data: any) => this.myMovie = data)
        );
    }


    findMovieByTile(data) {
        this.myMovie = data;
        // this.myMovie.id = data.id;
        this.http.get(this.findMovieUrl + data.title)
            .subscribe(
                x => console.log(JSON.stringify(x)
                )
            );
        this.router.navigate(['searchSuccess']);

    }
}
