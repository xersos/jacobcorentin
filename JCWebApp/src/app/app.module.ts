import { APP_BASE_HREF } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { CursorComponent } from '@shared/components/cursor/cursor.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { NavComponent } from '@shared/components/nav/nav.component';

import { EnvironmentConfigService } from '@shared/services';
import { SharedModule } from '@shared/shared.module';
import { appRoutedComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

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
        LayoutComponent,
        CursorComponent,
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
