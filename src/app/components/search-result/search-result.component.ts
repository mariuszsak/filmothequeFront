import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {Movie} from '../../model/movie.model';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


    isLoggedIn = false;
    hasResult = false;


    constructor(private movieService: MovieService, private token: TokenStorageService) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
        console.clear();
        // this.movieService.myMovie = null;
        this.getDetail();
    }

    getDetail() {
        if (this.movieService.isFound) {
            this.hasResult = true;
        } else {
            this.hasResult = false;
            console.log('FFFAAAALLLLLSSSEEEE');
        }
    }

}


// export class MovieDataSource2 extends DataSource<any> {
//     constructor(private movieService: MovieService) {
//         super();
//     }
//
//     connect(): Observable<Movie[]> {
//         return this.movieService.getAllMovies();
//     }
//
//     disconnect() {
//     }
// }
