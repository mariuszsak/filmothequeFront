import {Component, OnInit} from '@angular/core';
import {AuthLoginInfo} from '../authentication/login-info';
import {TokenStorageService} from '../authentication/token-storage.service';
import {AuthService} from '../authentication/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    private loginInfo: AuthLoginInfo;
    router: string;

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {
    }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            // this.roles = this.tokenStorage.getAuthorities();
        }
    }

    onSubmit() {
        console.log(this.form);

        this.loginInfo = new AuthLoginInfo(
            this.form.username,
            this.form.password);

        this.authService.attemptAuth(this.loginInfo).subscribe(
            data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUsername(data.username);
                this.tokenStorage.saveAuthorities(data.authorities);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                // this.roles = this.tokenStorage.getAuthorities();
                // this.reloadPage();
            },
            error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isLoginFailed = true;
            }
        );
    }

    // reloadPage() {
    //     window.location.reload();
    // }
}
