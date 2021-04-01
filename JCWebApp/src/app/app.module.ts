import { APP_BASE_HREF } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { EnvironmentConfigService } from '@shared/services';
import { SharedModule } from '@shared/shared.module';
import { appRoutedComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HelpComponent } from './help/help.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LoadingBarRouterModule,
        SharedModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        appRoutedComponents,
        ForbiddenComponent,
        HelpComponent,
        NavComponent,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (environmentConfigService: EnvironmentConfigService) =>
                () => environmentConfigService.load().toPromise(),
            deps: [EnvironmentConfigService],
            multi: true
        },
        {
            provide: APP_BASE_HREF,
            useValue: '/',
        },
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }