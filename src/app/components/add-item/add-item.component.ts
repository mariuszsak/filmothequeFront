import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {MovieService} from '../../services/movie.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

    isLoggedIn = false;

    formItem = {
        title: '',
        year: '',
        release: '',
        genre: ''
    };

    constructor(private http: HttpClient,
                private token: TokenStorageService,
                private router: Router,
                private movieService: MovieService) {

    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
    }

    // TODO
    onSubmit(form) {
        console.log('form here: ');
        console.log(form);
        this.movieService.saveMovie(form).subscribe(
            res => {
            },
            err => {
                alert('An error occurred while save movie');
            }
        );
        this.router.navigate(['addSuccess']);
    }
}
