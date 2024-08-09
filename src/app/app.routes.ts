import { Routes } from '@angular/router';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';



export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => 
            import('./auth/login/login.component')
                .then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => 
            import('./auth/register/register.component')
                .then(m => m.RegisterComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => 
            import('./pages/dashboard/dashboard.component')
                .then(m => m.DashboardComponent)
    },
    {
        path: 'detail/:id',
        loadComponent: () => 
            import('./pages/product-detail/product-detail.component')
                .then(m => m.ProductDetailComponent)
    },
    {
        path: 'cart',
        loadComponent: () => 
            import('./pages/cart/cart.component')
                .then(m => m.CartComponent)
    },
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NoPageFoundComponent }
];
