import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageResolver } from '@shared/resolver/homepage.resolver';
import { AboutMeComponent } from './about-me/about-me.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {HomepageResolver}
    },
    {
        path: 'about-me',
        component: AboutMeComponent,
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent,
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

export const appRoutedComponents = [
    AboutMeComponent,
    DashboardComponent,
    ForbiddenComponent,
    NotFoundComponent,
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
