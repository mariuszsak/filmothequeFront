import {Component, OnInit} from '@angular/core';
import {MovieDataSource} from '../table/table.component';
import {MovieService} from '../../services/movie.service';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {Movie} from '../../model/movie.model';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage.service';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

    dataSource = new MovieDataSource2(this.movieService, this.ls);
    displayedColumns = ['id', 'title', 'year', 'released', 'genre'];
    isLoggedIn = false;
    router: string;


    constructor(private movieService: MovieService, private token: TokenStorageService, private ls: LocalStorageService) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
    }
}

export class MovieDataSource2 extends DataSource<any> {
    constructor(private movieService: MovieService, private ls: LocalStorageService) {
        super();
    }

    connect(): Observable<Movie[]> {
        return this.movieService.getMovie();
    }

    disconnect() {
    }
}
