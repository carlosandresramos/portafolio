import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core'; 
import { Home } from './components/home/home'; 
import { Projects } from './components/projects/projects'; 
import { Contact } from './components/contact/contact'; 

export const routes: Routes = [ 
    { path: '', component: Home }, 
    { path: 'projects', component: Projects }, 
    { path: 'contact', component: Contact }, 
    { path: '**', redirectTo: '' }, 
]; 

export const appConfig: ApplicationConfig = { 
    providers: [ provideRouter(routes), ], 
};