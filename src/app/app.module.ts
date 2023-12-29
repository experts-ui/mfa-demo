import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
export function initializeApp(): () => void {
  return () => {
    loadRemoteModule({
      remoteEntry: "https://saswatiaccenture.github.io/ReactTopNavMFE/remoteEntry.js",
      remoteName: "topNavigation",
      exposedModule: "./TopNav",
    });
  };
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, // Added for custom elements support
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
