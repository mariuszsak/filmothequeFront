import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {FormControl} from '@angular/forms';
import {Movie} from '../../model/movie.model';
import {MovieService} from '../../services/movie.service';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

    public url = 'http://localhost:8080/add';
    isLoggedIn = false;

    formItem = {
        Title: '',
        Year: 2000,
        Release: '',
        Genre: ''
    };

    constructor(private http: HttpClient, private token: TokenStorageService, private router: Router, private ls: LocalStorageService) {

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

    onSubmit(form) {
        console.log('xxx');
        console.log(localStorage.getItem('testkey'));
        this.http.post<Movie[]>('http://localhost:8080/save', form).subscribe();
        this.router.navigate(['addSuccess']);
    }
}
