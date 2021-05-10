import { APP_BASE_HREF } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment.prod';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ContactComponent } from '@shared/components/contact/contact.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { NavComponent } from '@shared/components/nav/nav.component';

import { ServiceWorkerModule } from '@angular/service-worker';
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
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
    ],
    declarations: [
        AppComponent,
        ContactComponent,
        appRoutedComponents,
        FooterComponent,
        LoadingComponent,
        NavComponent,
        LayoutComponent,
    ],
    providers: [
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
