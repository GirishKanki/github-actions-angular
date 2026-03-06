import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'user-login',
        loadChildren: () => import('./modules/user-login/user-login.module').then(m => m.UserLoginModule)
    },
    {
        path:'',
        loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
    }
];
