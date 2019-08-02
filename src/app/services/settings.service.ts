import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    private BASE_URL = 'http://localhost:8080';
    private URL_GET_APIKEY = `${this.BASE_URL}/getAK`;
    private URL_SET_APIKEY = `${this.BASE_URL}/setAK`;
    private URL_TEST_APIKEY = `${this.BASE_URL}/testAK`;

    constructor(private http: HttpClient) {
    }

    getApiKey(user) {
        return this.http.post(this.URL_GET_APIKEY, user);
    }

    setApiKey(form: any) {
        return this.http.post(this.URL_SET_APIKEY, form);
    }

    testApiKey(form: any) {
        return this.http.post(this.URL_TEST_APIKEY, form);
    }
}
