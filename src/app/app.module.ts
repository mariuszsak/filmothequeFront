import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TableComponent} from './components/table/table.component';
import {MatTableModule} from '@angular/material';
import {MovieService} from './services/movie.service';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './authentication/auth-interceptor';
import { MenuComponent } from './components/menu/menu.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    MenuComponent,
    AddItemComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    routing
  ],
  providers: [MovieService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
      }
      ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
