import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {Router} from '@angular/router';
import {Movie} from 'src/app/model/movie.model';
import {isEmpty} from 'rxjs/operators';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

    isLoggedIn = false;
    columns: string[];
    movie: Movie[] = [];


    constructor(private movieService: MovieService, private token: TokenStorageService, private router: Router) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
        this.getDetail();
        this.columns = this.movieService.getColumns();

    }

    getDetail() {
        return this.movieService.getFoundedMovie().subscribe(
            res => {
                if (res.length > 0 ) {
                    this.movie = res;
                } else {
                    alert('Movie not found in your database!');
                    this.router.navigate(['']);
                }
            },
            err => {
                alert('AN error occurred during fetching movie');
            }
        );
    }
}
