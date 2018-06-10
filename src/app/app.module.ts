import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { OktaAuthService } from '@okta/okta-angular';

import {
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';

const config = {
  issuer: 'https://dev-413097.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaff6hctw7CTTMKK0h7'
}


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


import { ContentfulService } from './contentful.service';


import {TransferHttpCacheModule} from '@nguniversal/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    OktaAuthModule.initAuth(config),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'implicit/callback', component: OktaCallbackComponent},
      { path: 'portfolio', component: PortfolioComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
