import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BvinoLibModule,
  SessionService,
  BVAuthorizationService,
  ConstantsService,
  AlertService,
  BVHttpService,
  RichiesteService,
  BVCommonService
} from 'bvino-lib';

import { FormsModule } from '@angular/forms';
import { AppSessionService } from './services/appSession.service';
import { CookieService } from 'ngx-cookie-service';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { PipesModule } from './pipes/pipes.module';
import { DataTablesModule } from 'angular-datatables';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IgxDatePickerModule, IgxIconModule, IgxSuffixModule, IgxInputGroupModule, IgxSnackbarModule } from 'igniteui-angular';
import { BVHttpInterceptor } from './interceptors/http.inteceptor';

import { UtentiModule } from './components/utenti/utenti.module';
import { LoginModule } from './components/login/login.module';
import { NotificheModule } from './components/notifiche/notifiche.module';
import { EventiModule } from './components/eventi/eventi.module';
import { FeedModule } from './components/feed/feed.module';
import { ViniModule } from './components/vini/vini.module';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    JwPaginationComponent
  ],
  imports: [
    LoginModule,
    UtentiModule,
    NotificheModule,
    EventiModule,
    FeedModule,
    ViniModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BvinoLibModule.forRoot(),
    FormsModule,
    PipesModule,
    DataTablesModule,
    BrowserAnimationsModule,
    IgxDatePickerModule, IgxIconModule, IgxSuffixModule, IgxInputGroupModule, IgxSnackbarModule
  ],
  providers: [
    SessionService,
    ConstantsService,
    BVAuthorizationService,
    CookieService,
    AppSessionService,
    AlertService,
    BVHttpService,
    RichiesteService,
    BVCommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BVHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
