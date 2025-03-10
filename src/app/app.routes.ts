import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main.layout';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path:'', component: MainLayoutComponent, 
        children: [
            {path:'home', component: HomeComponent},
        ]
    },
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},

];
