import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    private BASE_URL = 'http://localhost:8080';
    private URL_GET_APIKEY = `${this.BASE_URL}/getAK`;

    constructor(private http: HttpClient) {
    }

    getApiKey(user) {
        return this.http.post(this.URL_GET_APIKEY, user);
    }
}
