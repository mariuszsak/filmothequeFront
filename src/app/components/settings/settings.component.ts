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
    isEnabled = false;

    item = {
        apiKey: ''
    };

    user: UsernameInfo = {
        username: ''
    };

    username: string;

    message = {
        username: '',
        'userSettings': this.item
    };

    constructor(private token: TokenStorageService,
                private settingsService: SettingsService) {
    }

    ngOnInit() {
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }
        this.getAK();
    }

    onSubmit(form) {
        this.message.username = this.token.getUsername();
        this.message.userSettings = form;
        this.settingsService.setApiKey(this.message).subscribe();
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

    doTestApikey(value: any) {
        this.settingsService.testApiKey(value).subscribe();

    }
}
