import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageResolver } from '@shared/resolver/homepage.resolver';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {HomepageResolver}
    },
    {
        path: 'help',
        component: HelpComponent,
        resolve: {HomepageResolver}
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent,
        pathMatch: 'full',
        resolve: {HomepageResolver}
    },
    {
        path: '**',
        component: NotFoundComponent,
        resolve: {HomepageResolver}
    }
];

export const appRoutedComponents = [
    NotFoundComponent,
    DashboardComponent,
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
