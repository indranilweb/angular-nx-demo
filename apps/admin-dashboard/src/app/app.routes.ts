import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
