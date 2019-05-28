import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../authentication/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
  }

    logout() {
        this.token.signOut();
        window.location.reload();
    }

}
