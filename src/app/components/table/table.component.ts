import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MovieService} from '../../services/movie.service';
import {Observable} from 'rxjs';
import {Movie} from '../../model/movie.model';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    dataSource = new MovieDataSource(this.movieService);
    displayedColumns = ['id', 'title', 'year', 'released', 'genre'];
    isLoggedIn = false;
    router: string;

    constructor(private movieService: MovieService, private token: TokenStorageService, private _router: Router) {
        this.router = _router.url;
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
    }

    logout() {
        this.token.signOut();
        window.sessionStorage.clear();
        console.log(event);
        window.location.reload();
        console.log(event);
    }
}

export class MovieDataSource extends DataSource<any> {
    constructor(private movieService: MovieService) {
        super();
    }

    connect(): Observable<Movie[]> {
        return this.movieService.getMovie();
    }

    disconnect() {
    }
}
