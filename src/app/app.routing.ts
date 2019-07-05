import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {AddItemComponent} from './components/add-item/add-item.component';
import {GbyeComponent} from './components/gbye/gbye.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {SearchExtComponent} from './components/search-ext/search-ext.component';
import {AddItemResultComponent} from './components/add-item-result/add-item-result.component';
import {SearchResultComponent} from './components/search-result/search-result.component';


const appRoutes: Routes = [
    {path: 'all', component: TableComponent},
    {path: 'add', component: AddItemComponent},
    {path: 'addSuccess', component: AddItemResultComponent},
    {path: 'searchI', component: SearchItemComponent},
    {path: 'searchSuccess', component: SearchResultComponent},
    {path: 'searchE', component: SearchExtComponent},
    {path: 'gbye', component: GbyeComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'login'}
];
export const routing = RouterModule.forRoot(appRoutes);

