import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {AddItemComponent} from './components/add-item/add-item.component';


const appRoutes: Routes = [
  { path: 'all', component: TableComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'login'},
  { path: '**', redirectTo: 'login' }
];
export const routing = RouterModule.forRoot(appRoutes);

