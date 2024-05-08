import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DetailsComponent } from './components/reports/details/details.component';
import { WelcomeComponent } from './components/dashboard/welcome/welcome.component';
import { HmpAcademyComponent } from './components/dashboard/hmp-academy/hmp-academy.component';
import { authGuard } from './auth.guard';
// import { AllReportsComponent } from './components/reports/all-reports/all-reports.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard/welcome', pathMatch: 'full' },
  // { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      // { path: '', redirectTo: 'reports', pathMatch: 'full' }, // Default child route
      { path: 'welcome', component: WelcomeComponent },
      { path: 'hmp-academy', component: HmpAcademyComponent },

      {
        path: 'reports',
        component: ReportsComponent,
        children: [
          // { path: '', redirectTo: 'daily', pathMatch: 'full' }, // Default child route
          // { path: 'daily', component: DailyComponent },
          // { path: 'reports', component: AllReportsComponent },
          // Add other report-related routes here
        ],
      },
    ],
  },
  {
    path: 'dashboard/reports/:id',
    component: DetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
