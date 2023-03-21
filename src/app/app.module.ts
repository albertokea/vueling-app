import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpRequestsInterceptor } from './interceptors/http-request/http-requests.interceptor';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,        
        AppRoutingModule,
        NoopAnimationsModule,
        MatToolbarModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestsInterceptor, multi: true },
      ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
