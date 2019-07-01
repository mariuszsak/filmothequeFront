import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {AddItemComponent} from './components/add-item/add-item.component';
import {GbyeComponent} from './components/gbye/gbye.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {SearchExtComponent} from './components/search-ext/search-ext.component';


const appRoutes: Routes = [
  { path: 'all', component: TableComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'searchI', component: SearchItemComponent },
  { path: 'searchE', component: SearchExtComponent },
  { path: 'gbye', component: GbyeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];
export const routing = RouterModule.forRoot(appRoutes);

