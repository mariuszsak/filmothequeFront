import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../authentication/token-storage.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  isLoggedIn = false;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
    }
  }

}
