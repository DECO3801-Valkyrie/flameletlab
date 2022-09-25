import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FlameLetLabCoreModule} from './providers/core/core.module';
import {JwtInterceptor} from './providers/core/http-interceptors/jwt.interceptor';
import {JwtExpiredInterceptor} from './providers/core/http-interceptors/jwt.expired.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LocalStorageService, NgxWebstorageModule} from 'ngx-webstorage';
import {StarRatingModule} from 'angular-star-rating';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    StarRatingModule.forRoot(),
    AppRoutingModule,
    FlameLetLabCoreModule,
    FormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
    deps: [LocalStorageService]
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtExpiredInterceptor,
    multi: true,
    deps: [Injector]
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
