import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../authentication/token-storage.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

    public url = 'http://localhost:8080/add';
    isLoggedIn = false;
    router: string;

    constructor(private http: HttpClient, private token: TokenStorageService, private _router: Router) {
        this.router = _router.url;
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
            this.goAdd();
        }
    }

    goAdd() {
        return this.http.get(this.url, {responseType: 'text'}).subscribe(data => {
                console.log(data);
            }
        );
    }

    // logout() {
    //     this.token.signOut();
    //     window.sessionStorage.clear();
    //     window.location.replace('login');
    // }
}
