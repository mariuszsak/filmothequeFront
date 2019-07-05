import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../model/movie.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private serviceUrl = 'http://localhost:8080/all';

    constructor(private http: HttpClient) {
    }

    myData: Movie[] = [];

    getMovie(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.serviceUrl);
    }

    getFind(title: string) {
        this.http.get<Movie[]>('http://localhost:8080/all').subscribe(data => {
            this.myData = data.filter(d => d.title === title);
            console.log(JSON.stringify(this.myData));
        });
    }
}
