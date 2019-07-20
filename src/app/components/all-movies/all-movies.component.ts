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
    templateUrl: './all-movies.component.html',
    styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

    movies: Movie[] = [];
    columns: string[];
    isLoggedIn = false;
    router: string;

    constructor(private movieService: MovieService, private token: TokenStorageService) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
        this.getAllMovies();
        this.columns = this.movieService.getColumns();
    }

    getAllMovies() {
        return this.movieService.getAllMoviesFromApi().subscribe(
            res => {
                this.movies = res;
            },
            err => {
                alert('An error occurred during fetching movies from database');
            }
        );
    }

    // logout() {
    //     this.token.signOut();
    //     window.sessionStorage.clear();
    //     window.location.replace('login');
    // }
    deleteMovie() {
        alert('deletion');
    }

    updateMovie(m: Movie) {
        this.movieService.saveMovie(m).subscribe(
            res => {
            },
            err => {
                alert('An error occurred while save movie');
            }
        );

    }
}

