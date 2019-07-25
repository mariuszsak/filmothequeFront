import {Settings} from '../model/settings.model';


export class AuthRegisterInfo {
    username: string;
    role: string[];
    password: string;
    userSettings: Settings;


    constructor(username: string, password: string, settings: Settings) {
        this.username = username;
        this.password = password;
        this.role = ['user'];
        this.userSettings = settings;
    }
}
