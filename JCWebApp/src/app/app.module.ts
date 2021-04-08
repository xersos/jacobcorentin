import { APP_BASE_HREF } from '@angular/common';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EnvironmentConfigService } from '@shared/services';
import { SharedModule } from '@shared/shared.module';
import { appRoutedComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HelpComponent } from './help/help.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        appRoutedComponents,
        ForbiddenComponent,
        HelpComponent,
        NavComponent,
        FooterComponent,
        PreloaderComponent,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (environmentConfigService: EnvironmentConfigService) =>
                () => environmentConfigService.load().toPromise(),
            deps: [EnvironmentConfigService, Injector],
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