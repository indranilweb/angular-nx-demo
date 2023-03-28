import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const appRoutes: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
