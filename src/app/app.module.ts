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
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';
import {AuthInterceptor} from './authentication/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    MenuComponent
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
