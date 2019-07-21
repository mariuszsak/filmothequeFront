import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../authentication/token-storage.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    isLoggedIn = false;

    constructor(private token: TokenStorageService) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
        this.getCurrentUser();
    }

    getCurrentUser(): string {
        return this.token.getUsername();
    }

    logout() {
        this.token.signOut();
        window.sessionStorage.clear();
        window.location.replace('gbye');
    }
}
