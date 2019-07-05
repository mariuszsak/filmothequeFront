import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {Movie} from '../../model/movie.model';
import {HttpClient} from '@angular/common/http';
import {MovieService} from '../../services/movie.service';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
    isLoggedIn = false;

    formItem = {
        Title: '',
    };

    constructor(private token: TokenStorageService, private movieService: MovieService) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
    }

    onSubmit() {
        const title = this.formItem.Title;
        this.movieService.getFind(title);
    }
}
