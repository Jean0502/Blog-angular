import { Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { BlogPostComponent } from './componets/blog-post/blog-post.component';

export const routes: Routes = [
    {
        path:'', redirectTo:  '/home', pathMatch: 'full'
    },
    {
        path:'home' , component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: ':postId', component: BlogPostComponent
    }
];
