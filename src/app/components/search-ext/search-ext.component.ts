import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../authentication/token-storage.service';

@Component({
  selector: 'app-search-ext',
  templateUrl: './search-ext.component.html',
  styleUrls: ['./search-ext.component.css']
})
export class SearchExtComponent implements OnInit {
  isLoggedIn = false;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
    }
  }

}
