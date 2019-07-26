import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../authentication/token-storage.service';
import {UsernameInfo} from '../../authentication/username-info';
import {SettingsService} from '../../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    isLoggedIn = false;

    item = {
        apiKey: ''
    };

    user: UsernameInfo = {
        username: ''
    };

    constructor(private token: TokenStorageService, private settingsService: SettingsService) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
        this.getAK();
    }

    onSubmit(form) {
        console.log('Setting form here: ');
        console.log(form);
        this.settingsService.setApiKey(form).subscribe();
        return false;
    }

    getAK() {
        this.user.username = this.token.getUsername();
        this.settingsService.getApiKey(this.user).subscribe(
            (res: any) => {
                console.log(res);
                this.item.apiKey = res.apiKey;
                console.log(this.item.apiKey);
            }
        );
    }
}
