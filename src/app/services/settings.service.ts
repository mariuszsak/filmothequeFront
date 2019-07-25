import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private BASE_URL = 'http://localhost:8080';
  private URL_ALL_MOVIES = `${this.BASE_URL}/all`;

  constructor() { }
}
