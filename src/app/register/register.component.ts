import {Component, OnInit} from '@angular/core';
import {AuthService} from '../authentication/auth.service';
import {AuthRegisterInfo} from '../authentication/register-info';
import {Settings} from '../model/settings.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: any = {};
    signupInfo: AuthRegisterInfo;
    isSignedUp = false;
    isSignUpFailed = false;
    errorMessage = '';
    userSettings: Settings = {
        apiKey: 'none'
    };


    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.form);

        this.signupInfo = new AuthRegisterInfo(
            this.form.username,
            this.form.password,
            this.userSettings
        );

        this.authService.signUp(this.signupInfo).subscribe(
            data => {
                console.log(data);
                this.isSignedUp = true;
                this.isSignUpFailed = false;
            },
            error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isSignUpFailed = true;
            }
        );
    }

}
