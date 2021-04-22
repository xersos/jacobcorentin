import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'about-me',
        loadChildren: () => import('src/app/about-me/about-me.module').then(m => m.AboutMeModule),
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
    DashboardComponent,
    ForbiddenComponent,
    NotFoundComponent,
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
