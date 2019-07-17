import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {Router} from '@angular/router';
import {Movie} from 'src/app/model/movie.model';
import {promise} from 'selenium-webdriver';
import map = promise.map;

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

    isLoggedIn = false;
    myMovie: any = [];


    constructor(private movieService: MovieService, private token: TokenStorageService, private router: Router) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
        this.getDetail();
    }

    getDetail() {
        this.movieService.returnFoundMovie().subscribe(data => {
            if (data) {
                this.myMovie = data;
                // const n = this.myMovie.id;
                console.log(this.myMovie);
                // console.log(n);
            } else {
                this.router.navigate(['']);
            }

        });

    }
}
