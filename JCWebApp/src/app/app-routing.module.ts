import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'help',
        component: HelpComponent,
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
    NotFoundComponent,
    DashboardComponent,
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }