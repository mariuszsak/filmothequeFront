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

    private BASE_URL = 'http://localhost:8080/';
    private URL_ALL_MOVIES = `${this.BASE_URL}all`;
    private URL_FIND_MOVIES = `${this.BASE_URL}find`;
    private URL_DELETE_MOVIES = `${this.BASE_URL}delete/`;
    private URL_SAVE_MOVIES = `${this.BASE_URL}save/`;

    constructor(private http: HttpClient, private router: Router) {
        this.myMovie = new Movie();
    }


    getAllMovies() {
        // return this.http.get<Movie[]>(this.URL_ALL_MOVIES);
        return this.http.get(this.URL_ALL_MOVIES).pipe(
            map((data: any) => this.myMovie = data)
        );
    }


    returnFoundMovie() {
        return this.http.get(this.URL_FIND_MOVIES + this.myMovie.title).pipe(
            map((data: any) => this.myMovie = data)
        );
    }

    findMovieByTile(data) {
        this.myMovie = data;
        // this.myMovie.id = data.id;
        this.http.get(this.URL_FIND_MOVIES + data.title)
            .subscribe(
                x => console.log(JSON.stringify(x)
                )
            );
        this.router.navigate(['searchSuccess']);

    }
}
