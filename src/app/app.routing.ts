import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {HomeComponent} from './components/home/home.component';


const appRoutes: Routes = [
  { path: 'all', component: TableComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];
export const routing = RouterModule.forRoot(appRoutes);

