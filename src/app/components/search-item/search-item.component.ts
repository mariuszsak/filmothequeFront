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
        this.movieService.findMovieByTile(form).subscribe(
            res => {
                if (!isEmpty()) {
                    this.movie = res;
                    this.router.navigate(['searchSuccess']);
                } else {
                    alert('Movie: ' + form.title + ' not found in your database!');
                }
            },
            err => {
                alert('An error occurred during searching movie');
            }
        );


        // this.myMovie = data;
        //     // this.myMovie.id = data.id;
        //     this.http.get(this.URL_FIND_MOVIES + data.title)
        //         .subscribe(
        //             x => console.log(JSON.stringify(x)
        //             )
        //         );
        //     this.router.navigate(['searchSuccess']);
        //
        // }
    }
}
