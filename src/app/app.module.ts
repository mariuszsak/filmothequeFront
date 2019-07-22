import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AllMoviesComponent} from './components/all-movies/all-movies.component';
import {MovieService} from './services/movie.service';
import {LoginComponent} from './login/login.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './authentication/auth-interceptor';
import {MenuComponent} from './components/menu/menu.component';
import {AddItemComponent} from './components/add-item/add-item.component';
import {BaseComponent} from './components/base/base.component';
import {GbyeComponent} from './components/gbye/gbye.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {SearchExtComponent} from './components/search-ext/search-ext.component';
import {AddItemResultComponent} from './components/add-item-result/add-item-result.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {LocalStorageService} from './services/local-storage.service';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        AllMoviesComponent,
        LoginComponent,
        MenuComponent,
        AddItemComponent,
        BaseComponent,
        GbyeComponent,
        SearchItemComponent,
        SearchExtComponent,
        AddItemResultComponent,
        SearchResultComponent,
        SettingsComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        routing
    ],
    providers: [LocalStorageService,
        MovieService,
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
