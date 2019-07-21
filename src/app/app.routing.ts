import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {AllMoviesComponent} from './components/all-movies/all-movies.component';
import {AddItemComponent} from './components/add-item/add-item.component';
import {GbyeComponent} from './components/gbye/gbye.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {SearchExtComponent} from './components/search-ext/search-ext.component';
import {AddItemResultComponent} from './components/add-item-result/add-item-result.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {SettingsComponent} from './components/settings/settings.component';


const appRoutes: Routes = [
    {path: 'all', component: AllMoviesComponent},
    {path: 'add', component: AddItemComponent},
    {path: 'addSuccess', component: AddItemResultComponent},
    {path: 'searchI', component: SearchItemComponent},
    {path: 'searchSuccess', component: SearchResultComponent},
    {path: 'searchE', component: SearchExtComponent},
    {path: 'gbye', component: GbyeComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'login'}
];
export const routing = RouterModule.forRoot(appRoutes);

