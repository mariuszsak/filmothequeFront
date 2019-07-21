import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../authentication/token-storage.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    isLoggedIn = false;

    item = {
        apikey: ''
    };

    constructor(private token: TokenStorageService) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
    }

    onSubmit(form) {
        console.log('Setting form here: ');
        console.log(form);
        return false;
    }
}
