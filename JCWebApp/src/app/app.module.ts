import { APP_BASE_HREF } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { HomepageResolver } from '@shared/resolver/homepage.resolver';

import { EnvironmentConfigService, LoadingService } from '@shared/services';
import { SharedModule } from '@shared/shared.module';
import { appRoutedComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageMaintenanceComponent } from './page-maintenance/page-maintenance.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        LoadingBarRouterModule,
        SharedModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        appRoutedComponents,
        FooterComponent,
        LoadingComponent,
        NavComponent,
        PageMaintenanceComponent
    ],
    providers: [
        HomepageResolver,
        LoadingService,
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
