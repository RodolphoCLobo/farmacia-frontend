import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FabricanteList } from './fabricantes/pages/fabricante-list/fabricante-list';
import { FabricanteCreate } from './fabricantes/pages/fabricante-create/fabricante-create';
import { FabricanteEdit } from './fabricantes/pages/fabricante-edit/fabricante-edit';
import { AuthGuard } from './auth/auth-guard';
import { MainLayoutComponent } from './layout/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'fabricantes',
        children: [
          { path: '', component: FabricanteList },
          { path: 'novo', component: FabricanteCreate },
          { path: ':id/editar', component: FabricanteEdit }
        ]
      }
    ]
  },
];
