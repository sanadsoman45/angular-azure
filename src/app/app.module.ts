import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// these are included in part2, you can comment them for part1
import { HomeComponent } from './home/home.component'; 
// these are included in part2, you can comment them for part1
import { CheckApiComponent } from './check-api/check-api.component'; 
// Import the Angular HTTP interceptor.
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { msalConfig, protectedResources, loginRequest } from './auth-config';

import { MsalModule, MsalRedirectComponent, MsalInterceptor, MsalGuard } from '@azure/msal-angular'; // MsalGuard added to imports
import { PublicClientApplication, InteractionType } from '@azure/msal-browser'; // InteractionType added to imports


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckApiComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot( new PublicClientApplication(msalConfig),
      {
        // The routing guard configuration.
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: [
             ...protectedResources.demoApi.scopes,
            ...loginRequest.scopes,
          ]
        }
      },
      {
        // MSAL interceptor configuration.
        // The protected resource mapping maps your web API with the corresponding app scopes. If your code needs to call another web API, add the URI mapping here.
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          [protectedResources.demoApi.endpoint, protectedResources.demoApi.scopes]
        ])
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard // MsalGuard added as provider here
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
