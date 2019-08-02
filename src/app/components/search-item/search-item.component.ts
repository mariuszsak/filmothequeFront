import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {MovieService} from '../../services/movie.service';
import {Router} from '@angular/router';
import {Movie} from '../../model/movie.model';
import {isEmpty} from 'rxjs/operators';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
    isLoggedIn = false;

    movie: Movie[] = [];

    constructor(private token: TokenStorageService,
                private movieService: MovieService,
                private router: Router) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
    }

    searchMovie(form) {
        console.log('Title from form: ' + form.title);
        this.movieService.findMovieByTile(form);
        this.router.navigate(['searchSuccess']);
    }
}
