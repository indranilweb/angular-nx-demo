import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { UiModule } from '@neostore/ui';
import { FeaturesModule } from '@neostore/features';
// import { ReportsModule } from '@ns-core/reports';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    UiModule,
    FeaturesModule,
    // ReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
