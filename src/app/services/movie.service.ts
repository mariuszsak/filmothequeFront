import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Movie} from '../model/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private serviceUrl = 'http://localhost:8080/all';

    constructor(private http: HttpClient) {
    }

    getMovie(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.serviceUrl);
    }
}
