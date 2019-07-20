import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../model/movie.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private t: string;
    private BASE_URL = 'http://localhost:8080';
    private URL_ALL_MOVIES = `${this.BASE_URL}/all`;
    private URL_FIND_MOVIE = `${this.BASE_URL}/find/`;
    private URL_DELETE_MOVIES = `${this.BASE_URL}/delete/`;
    private URL_SAVE_MOVIE = `${this.BASE_URL}/save`;

    constructor(private http: HttpClient) {
    }

    // GET COLUMNS
    getColumns() {
        return ['id', 'title', 'year', 'genre', 'released'];
    }

    // GET ALL MOVIES FROM API
    getAllMoviesFromApi(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.URL_ALL_MOVIES);
    }

    findMovieByTile(data) {
        this.t = data.title;
        // return this.http.get<Movie[]>(this.URL_FIND_MOVIE + data.title);
    }

    getFoundedMovie(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.URL_FIND_MOVIE + this.t);
    }

    saveMovie(form) {
        return this.http.post<Movie[]>(this.URL_SAVE_MOVIE, form);
    }
}
