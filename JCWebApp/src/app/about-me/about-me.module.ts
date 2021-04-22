import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { aboutMeRoutedComponents, AboutMeRoutingModule } from './about-me-routing.module';

@NgModule({
    imports: [
        SharedModule,
        AboutMeRoutingModule,
    ],
    declarations: [
        aboutMeRoutedComponents,
    ]
})
export class AboutMeModule { }