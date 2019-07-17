import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../model/movie.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    myMovie: Movie = null;
    isFound = false;

    private allMoviesUrl = 'http://localhost:8080/all';
    private findMovieUrl = 'http://localhost:8080/find/';

    constructor(private http: HttpClient) {
        this.myMovie = new Movie();
        this.isFound = false;
    }


    getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.allMoviesUrl);
    }

    findMovieByTile(title: string) {
        return this.http.get<Movie[]>(this.findMovieUrl + title)
            .pipe(
                map((data: any) => {
                    if (data) {
                        this.isFound = true;
                        this.myMovie = data;

                    } else {
                        this.isFound = false;
                    }
                })
            );
    }

}
