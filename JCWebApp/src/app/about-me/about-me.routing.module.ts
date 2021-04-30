import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me.component';

const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent,
    },
];

export const aboutMeRoutedComponents = [
    AboutMeComponent
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutMeRoutingModule { }