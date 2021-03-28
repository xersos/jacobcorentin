import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { EnvironmentConfigService } from '@shared/services';
import { SharedModule } from '@shared/shared.module';
import { catchError } from 'rxjs/operators';
import { appRoutedComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        LoadingBarRouterModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        appRoutedComponents,
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