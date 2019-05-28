import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {TokenStorageService} from '../../authentication/token-storage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    info: any;

    constructor(private token: TokenStorageService) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            // authorities: this.token.getAuthorities()
        };
    }

    logout() {
        this.token.signOut();
        window.location.reload();
    }
}
